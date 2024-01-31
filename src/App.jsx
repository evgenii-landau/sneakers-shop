import {Header} from "./components/Header /Header.jsx";
import {Basket} from "./components/Basket/Basket.jsx";
import {Home} from "./pages/Home/Home.jsx";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {Favorites} from "./pages/Favorites/Favorites.jsx";
import {AllResponses} from "./services /AllResponses.js";
import {Orders} from "./pages/Orders/Orders.jsx";

export const AppContext = createContext({})

function App() {
	const [sneakers, setSneakers] = useState([])
	const [basketItems, setBasketItems] = useState([])
	const [favoriteItems, setFavoriteItems] = useState([])
	const [basketOpened, setBasketOpened] = useState(false)
	const [loading, setLoading] = useState(false)
	const [totalSum, setTotalSum] = useState(0)

	const isItemAdded = (id) => basketItems.some(item => Number(item.id) === Number(id))

	useEffect(() => {
		(() => {
			const total = basketItems.reduce((sum, current) => sum + current.price, 0)
			setTotalSum(total)
		})()
	}, [basketItems]);


	const addToFavorite = async (obj) => {
		try {
			if (favoriteItems.find(item => Number(item.id) === Number(obj.id))) {
				await axios({
					method: 'delete',
					url: `https://65b6e4e7da3a3c16ab013d9a.mockapi.io/favorites/${obj.id}`
				})
				setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
			} else {
				const {data} = await axios({
					method: 'post',
					url: 'https://65b6e4e7da3a3c16ab013d9a.mockapi.io/favorites',
					data: obj
				})
				setFavoriteItems(prev => [...prev, data])
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты!')
			console.log(`Ошибка: ${error}`)
		}
	}

	// function delFromFavorites(id) {
	// 	setFavoriteItems(prev => prev.filter(item => item.id !== id))
	// }

	const addToBasket = async (obj) => {
		try {
			if (basketItems.find(item => Number(item.id) === Number(obj.id))) {
				axios({
					method: 'delete',
					url: `https://65b6e4e7da3a3c16ab013d9a.mockapi.io/cart/${obj.id}`,
				})
				setBasketItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
			} else {
				axios({
					method: 'post',
					url: 'https://65b6e4e7da3a3c16ab013d9a.mockapi.io/cart',
					data: obj
				})
				setBasketItems(prev => [...prev, obj])
			}
		} catch (error) {
			alert('Не удалось добаыить в корзину')
			console.log(`Ошибка: ${error}`)
		}
	}

	function delFromBasket(id) {
		axios({
			method: 'delete',
			url: `https://65b6e4e7da3a3c16ab013d9a.mockapi.io/cart/${id}`,
		})
		setBasketItems(prev => prev.filter(item => item.id !== id))
	}

	useEffect(() => {
		const fetchAllData = async () => {
			setLoading(prev => !prev)
			const data = await AllResponses.AllData()
			setBasketItems(data[0].data)
			setFavoriteItems(data[1].data)
			setSneakers(data[2].data.splice(0, 12))
			setLoading(prev => !prev)
		}
		fetchAllData()
	}, [])

	return (
		<AppContext.Provider value={{favoriteItems, addToFavorite, loading, isItemAdded, totalSum}}>
			<div className='wrapper'>
				<Header onOpen={() => setBasketOpened(true)}/>

				<Routes>
					<Route path='/' element={<Home
						data={sneakers}
						addToBasket={(obj) => addToBasket(obj)}
						delFromBasket={(id) => delFromBasket(id)}
						addToFavorite={(obj) => addToFavorite(obj)}
						basketItems={basketItems}
						favoriteItems={favoriteItems}/>}>
					</Route>
					<Route path='/favorites' element={<Favorites
						delFromFavorites={(id) => delFromFavorites(id)}/>}>
					</Route>
					<Route path='/orders' element={<Orders/>}>

					</Route>
				</Routes>

				{basketOpened && <Basket basketItems={basketItems}
										 onClose={() => setBasketOpened(false)}
										 delFromBasket={(id) => delFromBasket(id)}/>}
			</div>
		</AppContext.Provider>
	)
}

export default App

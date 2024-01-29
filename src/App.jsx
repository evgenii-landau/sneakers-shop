import {Header} from "./components/Header /Header.jsx";
import {Basket} from "./components/Basket/Basket.jsx";
import {Home} from "./pages/Home/Home.jsx";
import {useEffect, useState} from "react";
import {SneakersService} from "./services /SneakersService.js";
import axios from "axios";
import {BasketServices} from "./services /BasketServices.js";
import {Route, Routes} from "react-router-dom";
import {Favorites} from "./pages/Favorites/Favorites.jsx";
import {FavoritesServices} from "./services /FavoritesServices.js";

function App() {
	const [sneakers, setSneakers] = useState([])
	const [basketItems, setBasketItems] = useState([])
	const [favoriteItems, setFavoriteItems] = useState([])
	const [basketOpened, setBasketOpened] = useState(false)


	const addToFavorite = async (obj) => {
		try {
			if (favoriteItems.find(item => item.id === obj.id)) {
				await axios({
					method: 'delete',
					url: `https://65b6e4e7da3a3c16ab013d9a.mockapi.io/favorites/${obj.id}`
				})
				setFavoriteItems(prev => prev.filter(item => item.id !== obj.id))
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
		}
	}

	function delFromFavorites(id) {
		setFavoriteItems(prev => prev.filter(item => item.id !== id))
	}

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
		async function fetchDataSneakers() {
			const data = await SneakersService.getAllSneakers()
			setSneakers(data)
		}

		fetchDataSneakers()

		async function fetchDataBasket() {
			const data = await BasketServices.getAllBasket()
			setBasketItems(data)
		}

		fetchDataBasket()

		async function fetchDataFavorites() {
			const data = await FavoritesServices.getAllFavorites()
			setFavoriteItems(data)
		}

		fetchDataFavorites()
	}, [])

	return (
		<div className='wrapper'>
			<Header onOpen={() => setBasketOpened(true)}/>
			<Routes>
				<Route path='/' element={<Home data={sneakers} addToBasket={(obj) => addToBasket(obj)}
											   delFromBasket={(id) => delFromBasket(id)}
											   addToFavorite={(obj) => addToFavorite(obj)}/>}></Route>
				<Route path='/favorites' element={<Favorites favoriteItems={favoriteItems}
															delFromFavorites={(id) => delFromFavorites(id)} addToFavorite={addToFavorite} favorited={true}/>}></Route>
			</Routes>
			{basketOpened && <Basket items={basketItems} onClose={() => setBasketOpened(false)}
									delFromBasket={(id) => delFromBasket(id)}/>}
		</div>
	)
}

export default App

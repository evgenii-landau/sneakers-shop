import {Header} from "./components/Header /Header.jsx";
import {Basket} from "./components/Basket/Basket.jsx";
import {Content} from "./components/Content/Content.jsx";
import {useEffect, useState} from "react";
import {SneakersService} from "./services /SneakersService.js";

function App() {
	const [sneakers, setSneakers] = useState([])
	const [basketItems, setBasketItems] = useState([])
	const [basketOpened, setBasketOpened] = useState(false)

	function addToBasket(obj) {
		basketItems.includes(obj) || setBasketItems(prev => [...prev, obj])
	}

	function delFromBasket(id) {
		setBasketItems(prev => prev.filter(item => item.id !== id))
	}

	useEffect(() => {
		async function fetchData() {
			const data = await SneakersService.getAllUsers()
			setSneakers(data)
		}

		fetchData()
	}, [])

	return (
		<div className='wrapper'>
			{basketOpened ? <Basket items={basketItems} onClose={() => setBasketOpened(false)} delFromBasket={(id) => delFromBasket(id)}/> : null}
			<Header onOpen={() => setBasketOpened(true)}/>
			<Content data={sneakers} addToBasket={(obj) => addToBasket(obj)} delFromBasket={(id) => delFromBasket(id)}/>
		</div>
	)
}

export default App

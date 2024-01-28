import {Card} from "./Card/Card.jsx";

export const Content = ({data, addToBasket, delFromBasket, basketItems}) => {

	return (
		<section className='content'>
			<div className='contentTop'>
				<h1>Все кроссовки</h1>
				<div>
					<img width={14} height={14} src="/img/search.svg" alt="search"/>
					<input placeholder='Поиск...'/>
				</div>
			</div>
			<div className='sneakers'>
				{data.map(item => (
					<Card key={item.id} data={item} addToBasket={(obj) => addToBasket(obj)}
						  delFromBasket={(id) => delFromBasket(id)} />
				))}
			</div>

		</section>
	)
}
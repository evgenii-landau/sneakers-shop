// import classes from './Content.module.scss';
// import {Card} from './Card/Card.jsx';
// import {useState} from "react";
//
// export const Content = () => {
// 	const [searchValue, setSearchValue] = useState('')
//
// 	function changeSearchValue(event) {
// 		setSearchValue(event.target.value)
// 	}
//
// 	function clearInput() {
// 		setSearchValue('')
// 	}
//
// 	return (
// 		<section className={classes.content}>
// 			<div className={classes.contentTop}>
// 				<h1>{searchValue ? `Поиск по: "${searchValue}"` : 'Все кроссовки'}</h1>
// 				<div>
// 					<img width={14} height={14} src="/img/search.svg" alt="search"/>
// 					<input onChange={changeSearchValue} value={searchValue} placeholder='Поиск...'/>
// 					{searchValue &&
// 						<img className={classes.clear} onClick={clearInput} src="/img/btn-remove.svg" alt="clear"/>}
// 				</div>
// 			</div>
// 			<div className={classes.sneakers}>
// 				{data.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
// 					<Card key={item.id} data={item} addToBasket={(obj) => addToBasket(obj)}
// 						  delFromBasket={delFromBasket} addToFavorite={addToFavorite}/>
// 				))}
// 			</div>
//
// 		</section>
// 	)
// }
// import classes from './Orders.module.scss';
// import {Link} from "react-router-dom";
// import {Card} from "../Content/Card/Card.jsx";
//
// export const Orders = ({favoriteItems, delFromFavorites}) => {
// 	return (
// 		<section>
// 			{favoriteItems.length ?
// 				<>
// 					<div className={classes.favorites}>
// 						<Link to='/'>
// 							<img className={classes.btnBack} src="/img/btn-back.svg" alt="btn-back"/>
// 						</Link>
// 						<h1>Мои закладки</h1>
// 					</div>
// 					<div className={classes.content}>
// 						{favoriteItems.map(item => (
// 							<Card key={item.id} data={item}/>
// 						))}
// 					</div>
// 				</> :
// 				<>
// 					<div className={classes.noFavorites}>
// 						<img className={classes.smile} src="/img/sad-smile-1.png" alt="sad smile"/>
// 						<h2>У вас нет закладок</h2>
// 						<p>Вы ничего не добавляли в закладки</p>
// 						<Link to='/'><button>Вернуться назад</button></Link>
// 					</div>
// 				</>
// 			}
// 		</section>
// 	)
// }
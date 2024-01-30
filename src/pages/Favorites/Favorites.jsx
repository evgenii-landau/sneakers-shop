import classes from './Favorites.module.scss';
import {Link} from "react-router-dom";
import {Card} from '../../components/Content/Card/Card.jsx';
import {useContext} from "react";
import {AppContext} from "../../App.jsx";

export const Favorites = () => {
	const {favoriteItems} = useContext(AppContext)

	return (
		<section>
			{favoriteItems.length ?
				<>
					<div className={classes.favorites}>
						<Link to='/'>
							<img className={classes.btnBack} src="/img/btn-back.svg" alt="btn-back"/>
						</Link>
						<h1>Мои закладки</h1>
					</div>
					<div className={classes.content}>
						{favoriteItems.map(item => (
							<Card key={item.id} data={item} favorited={true}/>
						))}
					</div>
				</> :
				<>
					<div className={classes.noFavorites}>
						<img className={classes.smile} src="/img/sad-smile-1.png" alt="sad smile"/>
						<h2>У вас нет закладок</h2>
						<p>Вы ничего не добавляли в закладки</p>
						<Link to='/'>
							<button>Вернуться назад</button>
						</Link>
					</div>
				</>
			}
		</section>
	)
}
import classes from './Card.module.scss';
import {useContext, useState} from 'react';
import App, {AppContext} from '../../../App.jsx';
import ContentLoader from 'react-content-loader';

export const Card = ({data, addToBasket, delFromBasket, favorited = false, added = false}) => {
	const [isAdded, setIsAdd] = useState(added)
	const [isFavorite, setFavorite] = useState(favorited)
	const {addToFavorite, loading} = useContext(AppContext)
	const {isItemAdded} = useContext(AppContext)

	function addInBasket(prev) {
		setIsAdd(prev => !prev)
		isAdded ? delFromBasket(data.id) : addToBasket(data)
	}

	function addInFavorite(prev) {
		setFavorite(prev => !prev)
		addToFavorite(data)
	}

	return (
		loading ? (
			<ContentLoader
				speed={2}
				width={210}
				height={200}
				viewBox="0 0 150 187"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="10" ry="10" width="150" height="90"/>
				<rect x="0" y="106" rx="3" ry="3" width="150" height="15"/>
				<rect x="0" y="126" rx="3" ry="3" width="93" height="15"/>
				<rect x="0" y="163" rx="8" ry="8" width="80" height="25"/>
				<rect x="118" y="155" rx="8" ry="8" width="32" height="32"/>
			</ContentLoader>
		) : (
			<div className={classes.card}>
				<div onClick={() => addInFavorite(isFavorite)} className={classes.favorite}>
					<img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="Unliked"/>
				</div>
				<img src={data.imageUrl} alt="sneakers"/>
				<p>{data.title}</p>
				<div>
					<div>
						<span>цена:</span>
						<b>{data.price.toLocaleString()} руб.</b>
					</div>
					<button onClick={() => addInBasket()}>
						<img src={isAdded ? "/img/btn-added.png" : "/img/btn-add.png"} alt="btn-add"/>
					</button>
				</div>
			</div>
		)
	)
}





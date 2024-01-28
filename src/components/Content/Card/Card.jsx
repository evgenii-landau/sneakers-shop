import classes from './Card.module.scss';
import {useState} from "react";

export const Card = ({data, addToBasket, delFromBasket}) => {
	const [isAdded, setIsAdd] = useState(false)
	const [isFavorite, setFavorite] = useState(false)

	function addInBasket(prev) {
		setIsAdd(prev => !prev)
		isAdded ? delFromBasket(data.id) : addToBasket(data)
	}

	function addInFavorite(prev) {
		setFavorite(prev => !prev)
	}

	return (
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
				<button onClick={() => addInBasket(isAdded)}>
					<img src={isAdded ? "/img/btn-added.png" : "/img/btn-add.png"} alt="btn-add"/>
				</button>
			</div>
		</div>
	)
}
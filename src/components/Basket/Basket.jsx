import classes from './Basket.module.scss'
import {BasketItem} from "./BasketItem/BasketItem.jsx";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../../App.jsx";

export const Basket = ({basketItems, onClose, delFromBasket}) => {
	const {totalSum} = useContext(AppContext)
	return (
		<div className={classes.overlay}>
			<div className={classes.basket}>
				<h2>Корзина
					<img
						className={classes.removeBtn}
						onClick={onClose}
						src="/img/btn-remove.svg"
						alt="Remove Button"
					/>
				</h2>
				{basketItems.length ? (
					<ul className={classes.basketList}>
						{basketItems.map(item => (
							<BasketItem key={item.id} data={item} delFromBasket={delFromBasket}/>
						))}
					</ul>
				) : (
					<div className={classes.preview}>
						<img src="/img/box.png" alt="box"/>
						<h2>Корзина пустая</h2>
						<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
						<button onClick={onClose}>Вернуться назад</button>
					</div>
				)}
				<div>
					<ul className={classes.basketTotalBlock}>
						<li className={classes.totalPrice}>
							<span>Итого: </span>
							<div></div>
							<b>{totalSum.toFixed(2)} руб.</b>
						</li>
						<li className={classes.totalPrice}>
							<span>Налог 5%: </span>
							<div></div>
							<b>{(totalSum * 0.05).toFixed(2)} руб.</b>
						</li>
					</ul>
					<button>Оформить заказ</button>
				</div>
			</div>
		</div>
	)
}
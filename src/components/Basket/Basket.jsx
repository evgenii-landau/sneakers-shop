import classes from './Basket.module.scss'
import {BasketItem} from "./BasketItem/BasketItem.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";

export const Basket = ({basketItems, onClose, delFromBasket}) => {
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
							<b>{basketItems.length ? basketItems.reduce((summ, current) => summ + current.price, 0).toFixed(2) : '0'} руб.</b>
						</li>
						<li className={classes.totalPrice}>
							<span>Налог 5%: </span>
							<div></div>
							<b>{basketItems.length ? basketItems.reduce((summ, current) => summ + current.price, 0) * 0.05 : 0} руб. </b>
						</li>
					</ul>
					<button>Оформить заказ</button>
				</div>
			</div>
		</div>
	)
}
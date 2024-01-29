import classes from './Basket.module.scss'
import {BasketItem} from "./BasketItem/BasketItem.jsx";
import {useState} from "react";

export const Basket = ({items, onClose, delFromBasket}) => {
	return (
		<div className={classes.overlay}>
			<div className={classes.basket}>
				<h2>Корзина <img className={classes.removeBtn} onClick={onClose} src="/img/btn-remove.svg" alt="Remove Button"/>
				</h2>
				<ul className={classes.basketList}>
					{items.map(el => (
						<BasketItem key={el.id} data={el} delFromBasket={delFromBasket}/>
					))}
				</ul>
				<div>
					<ul className={classes.basketTotalBlock}>
						<li className={classes.totalPrice}>
							<span>Итого: </span>
							<div></div>
							<b>{items.length ? items.reduce((summ, current) => summ + current.price, 0) : '0'} руб.</b>
						</li>
						<li className={classes.totalPrice}>
							<span>Налог 5%: </span>
							<div></div>
							<b>{items.length ? items.reduce((summ, current) => summ + current.price, 0) * 0.05 : 0} руб. </b>
						</li>
					</ul>
					<button>Оформить заказ</button>
				</div>
			</div>
		</div>
	)
}
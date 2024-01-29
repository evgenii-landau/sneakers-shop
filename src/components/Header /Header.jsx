import classes from './Header.module.scss';
import {Link} from "react-router-dom";
import {useState} from "react";

export const Header = (props) => {
	return (
		<header>
			<div className={classes.headerLeft}>
				<Link to='/'>
					<img width={40} height={40} src='/img/logo.png' alt="logo"/>
				</Link>
				<div className={classes.headerInfo}>
					<h3>Sneakers Shop</h3>
					<p>Магазин лучших кросовок</p>
				</div>
			</div>
			<div className={classes.headerRight}>
				<ul>
					<li>
						<img className={classes.cart} onClick={props.onOpen} width={18} height={18} src='/img/cart.svg'
							 alt="cart"/>
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={18} height={18} src='/img/like.svg' alt="cart"/>
						<Link className={classes.favoriteLink} to='/favorites'>Закладки</Link>
					</li>
					<li>
						<img width={18} height={18} src='/img/user.svg' alt="user"/>
					</li>
				</ul>
			</div>
		</header>
	)
}
import classes from './Header.module.scss';
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {AppContext} from "../../App.jsx";

export const Header = (props) => {
	const {totalSum} = useContext(AppContext)

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
						<b>{totalSum.toLocaleString()} руб.</b>
					</li>
					<li>
						<img width={18} height={18} src='/img/like.svg' alt="cart"/>
						<Link className={classes.favoriteLink} to='/favorites'>Закладки</Link>
					</li>
					<li>
						<Link to='/orders'>
							<img width={18} height={18} src='/img/user.svg' alt="user"/>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}
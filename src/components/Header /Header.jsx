import classes from './Header.module.scss';

export const Header = (props) => {
	return (
		<header>
			<div className={classes.headerLeft}>
				<img width={40} height={40} src='/img/logo.png' alt="logo"/>
				<div className={classes.headerInfo}>
					<h3>Sneakers Shop</h3>
					<p>Магазин лучших кросовок</p>
				</div>
			</div>
			<div className={classes.headerRight}>
				<ul>
					<li>
						<img className={classes.cart} onClick={props.onOpen} width={18} height={18} src='/img/cart.svg' alt="cart"/>
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={18} height={18} src='/img/like.svg' alt="cart"/>
						<span>Закладки</span>
					</li>
					<li>
						<img width={18} height={18} src='/img/user.svg' alt="user"/>
					</li>
				</ul>
			</div>
		</header>
	)
}
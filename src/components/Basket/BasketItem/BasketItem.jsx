import classes from './BasketItem.module.scss';

export const BasketItem = ({data, delFromBasket}) => {
	return (
		<li className={classes.basketItem}>
			<img className={classes.basketImg} width={70} height={70} src={data.imageUrl} alt="sneakers"/>
			<div>
				<p>{data.title}</p>
				<b>{data.price}</b>
			</div>
			<img className={classes.removeBtn} onClick={() => delFromBasket(data.id)} src="/img/btn-remove.svg" alt="Remove Button"/>
		</li>
	)
}
import React from 'react';
import '../styles/OrderItem.scss';
import icon_close from "@icons/icon_close.png"
const OrderItem = ({product}) => {
	const { title, price, images } = product;
	return (
		<div className="OrderItem">
			<figure>
				<img src={images[0]} alt={title} />
			</figure>
			<p>{title}</p>
			<p>$ {price}</p>
			<img src={icon_close} alt="close" />
		</div>
	);
}

export default OrderItem;

import React, {useContext} from 'react';
import '../styles/OrderItem.scss';
import icon_close from "@icons/icon_close.png"
import AppContext from "@context/AppContext"

const OrderItem = ({product}) => {
	const { title, price, images } = product;
	const { removeFromCart } = useContext(AppContext);


	const handleClick = (product) => {
		console.log("remove product")
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={images[0]} alt={title} />
			</figure>
			<p>{title}</p>
			<p>$ {price}</p>
			<img src={icon_close} alt="close" onClick={()=> handleClick(product)} />
		</div>
	);
}

export default OrderItem;

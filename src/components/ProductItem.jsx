import React,{useContext} from 'react';
import '../styles/ProductItem.scss';
import ButtonCartIcon from "@icons/bt_add_to_cart.svg"
import AppContext from "@context/AppContext"

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);

  const { title, price, images } = product;

	const handleClick = (item) => {
		console.log("click on handle")
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>$ {price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={ButtonCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;

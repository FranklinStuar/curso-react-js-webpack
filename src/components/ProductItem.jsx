import React,{useState} from 'react';
import '../styles/ProductItem.scss';
import ButtonCartIcon from "@icons/bt_add_to_cart.svg"

const ProductItem = ({product}) => {
	const [cart, setCart] = useState([])
  const { id, title, price, images } = product;

	const handleClick = () => {
		console.log("click on handle")
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>$ {price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={ButtonCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;

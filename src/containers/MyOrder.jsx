import React,{useContext} from 'react';
import AppContext from '@context/AppContext';

import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import flechita from "@icons/flechita.svg"

const MyOrder = () => {
	const {state} = useContext(AppContext) 
	const totalCart = state.cart.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price, 0
	);
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem product={product} key={index}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalCart}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;

import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import UseGetProducts from "@hooks/UseGetProducts"

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const {products} = UseGetProducts(API)
	return (
		<section className="main-container">
			<div className="ProductList">
			{products.map(product => (
					<ProductItem key={product.id} product={product}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;

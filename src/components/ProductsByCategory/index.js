import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Products, Pages } from './styled';
import Product from '../Product';

export default function Page(props) {
	const products = useSelector(state => state.products.productsList);
	const loading = useSelector(state => state.products.isFetching);
	const category = useSelector(state => state.products.category);
	const [quant, setQuant] = useState(16);
	const dispatch = useDispatch();

	const nextPage = () => {
		if	(quant < products.length) {
			setQuant(quant + 16);
		}
	}

	const prevPage = () => {
		if (quant > 16) {
			setQuant(quant - 16);
		}
	}

	const productsList = (
		products.length > 0 
		? <Products>
				{products.slice(quant - 16, quant).map((product, index) => (
					<Product product={product} index={index} />
				))}
			</Products>
		: <h1>Nada encontrado</h1>
	)

	return (
		<Container>
			<p className="top">{category}</p>
			{ loading ? <div className="loader" /> : productsList }
			{ (products.length && !loading) > 0 
				? <Pages>
						<button type="button" onClick={nextPage}>
							+
						</button>
						<button type="button" onClick={prevPage}>
							-
						</button>
					</Pages>
				: null
			}
		</Container>
	)
}

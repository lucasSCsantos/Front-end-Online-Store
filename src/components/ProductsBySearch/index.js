import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Products, Pages } from './styled';
import ProductMinor from '../ProductMinor';
import Pagination from '@material-ui/lab/Pagination';

export default function Page() {
	const products = useSelector(state => state.products.productsList);
	const loading = useSelector(state => state.products.isFetching);
	const query = useSelector(state => state.products.query);
	const [isLoading, setIsLoading] = useState(false);
	const [quant, setQuant] = useState(20);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const prdCounts = Math.ceil(products.length / 20)
		setCount(prdCounts);
	}, [products]);

	useEffect(() => {
		setQuant(20);
	}, [query]);

	useEffect(() => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 1000);
	}, [quant]);

	const nextPage = () => {
		if	(quant < products.length) {
			setQuant(quant + 20);
		}
	}

	const prevPage = () => {
		if (quant > 20) {
			setQuant(quant - 20);
		}
	}

	const changePage = (e) => {
		const number = Number.parseFloat(e.target.innerText);
		if (number) {
			setQuant(number * 20);
		} else {
			const arrow = e.currentTarget.ariaLabel;
			if (arrow === 'Go to previous page') {
				prevPage();
			} else {
				nextPage();
			}
		}
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	const productsList = (
		products.length > 0 
		? <Products>
			{isLoading ? <div className="loader" /> :
				products.slice(quant - 20, quant).map((product, index) => (
					<ProductMinor product={product} key={index} />
				))}
				<Pages>
					<Pagination count={count} onChange={changePage} shape="rounded"/>
				</Pages>
			</Products>
		: <h1>Nada encontrado</h1>
	)

	return (
		<Container>
			<p className="top">Resultados para: {query} na loja</p>
			{ loading ? <div className="loader" /> : productsList }
		</Container>
	)
}

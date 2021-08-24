import React, { useEffect, useState } from 'react';
import { Container, Products, Pages } from './styled';
import Product from '../../components/Product';
import Pagination from '@material-ui/lab/Pagination';


export default function Page() {
	// const [isLoading, setIsLoading] = useState(false);
	const [quant, setQuant] = useState(16);
	const [count, setCount] = useState(0);
	const products = JSON.parse(localStorage.getItem('favoriteItems'));

	useEffect(() => {
		const prdCounts = products && Math.ceil(products.length / 16);
		setQuant(16);
		setCount(prdCounts);
	}, [])


	// useEffect(() => {
	// 	setIsLoading(true)
	// 	setTimeout(() => {
	// 		setIsLoading(false)
	// 	}, 1000);
	// }, [quant])
	
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

	const changePage = (e) => {
		const number = Number.parseFloat(e.target.innerText);
		if (number) {
			setQuant(number * 16);
		} else {
			const arrow = e.currentTarget.ariaLabel;
			if (arrow === 'Go to previous page') {
				prevPage();
			} else {
				nextPage();
			}
		}
	}

	const loader = (
		<div className="loaderBg">
			<div className="loader" />
		</div>
	)

	const productsList = (
		products
		? <Products>
				{products.slice(quant - 16, quant).map((product, index) => (
					<Product product={product} key={index} />
				))}
				<Pages>
					<Pagination count={count} onChange={changePage} shape="rounded" />
				</Pages>
			</Products>
		: <h1>Nenhum Produto</h1>
	)

	return (
		<Container>
			<p className="top">Favoritos</p>
			{ productsList }
		</Container>
	)
}

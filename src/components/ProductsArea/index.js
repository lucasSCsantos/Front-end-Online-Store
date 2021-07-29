import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Products, Pages } from './styled';
import { fetchProducts } from '../../action';
import Product from '../Product';
import Pagination from '@material-ui/lab/Pagination';


export default function Page() {
	const products = useSelector(state => state.products.productsList);
	const loading = useSelector(state => state.products.isFetching);
	const [quant, setQuant] = useState(16);
	const [query, setQuery] = useState('OFERTAS');
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		const startProducts = async () => {
			dispatch(fetchProducts('CATEGORY_ID', query));
		}
		
		startProducts();
	}, [query])

	useEffect(() => {
		const prdCounts = Math.ceil(products.length / 16)
		setQuant(16);
		setCount(prdCounts);
	}, [products])

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

	const productsList = (
		products.length > 0 
		? <Products>
				{products.slice(quant - 16, quant).map((product, index) => (
					<Product product={product} index={index} />
				))}
				<Pages>
					<Pagination count={count} onChange={changePage} shape="rounded" />
				</Pages>
			</Products>
		: <h1>Nada encontrado</h1>
	)

	const productAreaChange = ({ target }) => {
		const selected = document.querySelector('.selected');
		selected.classList.remove('selected');
		target.classList.add('selected');
		setQuery(target.innerHTML);
	}

	const loader = (
		<div className="loaderBg">
			<div className="loader" />
		</div>
	)

	return (
		<Container>
			<Button>
				<button
					onClick={(e) => productAreaChange(e)}
				>
					MAIS VENDIDOS
				</button>
				<button
					onClick={(e) => productAreaChange(e)}
					className="selected"
				>
					OFERTA
				</button>
				<button
					onClick={(e) => productAreaChange(e)}
				>
					NOVOS PRODUTOS
				</button>
			</Button>
			{ loading ? loader : productsList }
		</Container>
	)
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Product, Products, Img, Pages } from './styled';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { fetchProducts, getDetails, product_action } from '../../action';
import { Link } from 'react-router-dom';


export default function Page() {
	
	const products = useSelector(state => state.products.productsList);
	const loading = useSelector(state => state.products.isFetching);
	const [quant, setQuant] = useState(16);
	const dispatch = useDispatch();

	useEffect(() => {
		const startProducts = async () => {
			dispatch(fetchProducts('CATEGORY_ID', 'melhores'));
		}
		
		startProducts();
	}, [])


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
					<Product key={index}>
						<Link
							className="details"
							to={ `/product/${product.title.replace(/\s/g, '-').toLowerCase()}`}
							onClick={() => dispatch(getDetails(product))}
						>
							<Img>
								<img src={product.thumbnail} alt={product.title} />
							</Img>
						</Link>
						<p>{product.title.slice(0, 50)}</p>
						<p className="price">R${product.price.toFixed(2)}</p>
					</Product>
				))}
			</Products>
		: <h1>Nada encontrado</h1>
	)

	return (
		<Container>
			<Button>
				<button>
					PRODUTOS
				</button>
			</Button>
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

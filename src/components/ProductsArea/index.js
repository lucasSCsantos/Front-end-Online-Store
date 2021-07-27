import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Product, Products, Img } from './styled';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { product_action } from '../../action';


export default function Page() {
	
	const products = useSelector(state => state.products.productsList);
	const [quant, setQuant] = useState(16);
	const dispatch = useDispatch();

	useEffect(() => {
		const startProducts = async () => {
			const products = await getProductsFromCategoryAndQuery('CATEGORY_ID', 'motorola');
			dispatch(product_action(products.results));
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

	return (
		<Container>
			<Button>
				<button>
					PRODUTOS
				</button>
			</Button>
			{ products.length > 0 
				? <Products>
					{products.slice(quant - 16, quant).map((product, index) => (
						<Product key={index}>
							<Img>
								<img src={product.thumbnail} alt={product.title} />
							</Img>
							<p>{product.title.slice(0, 50)}</p>
							<p className="price">R${product.price.toFixed(2)}</p>
						</Product>
					))}
				</Products>
				: <h1>Nada encontrado</h1>
			}
			<button type="button" onClick={nextPage}>
				+
			</button>
			<button type="button" onClick={prevPage}>
				-
			</button>
		</Container>
	)
}

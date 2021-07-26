import React from 'react';
import { Container } from './styled';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import ProductsArea from '../../components/ProductsArea';


export default function Page() {
	return (
		<Container>
			<Header />
			<Categories />
			<ProductsArea />
		</Container>
	)
}

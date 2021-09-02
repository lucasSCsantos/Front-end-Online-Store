import React from 'react';
import TopArea from '../../components/ProductPageComponents/TopArea/';
import MidArea from '../../components/ProductPageComponents/MidArea/';
import BottomArea from '../../components/ProductPageComponents/BottomArea/';
import { Container } from './styled';
import { useSelector } from 'react-redux';

export default function Page() {
	const product = useSelector(state => state.products.product);
	const productComments = localStorage.productComments ? JSON.parse(localStorage.productComments) : {};
	const productRates = localStorage.productRates ? JSON.parse(localStorage.productRates) : {};
	localStorage.setItem('productComments', JSON.stringify({...productComments}));
	localStorage.setItem('productRates', JSON.stringify({...productRates}));

	return (
		<Container>
			<TopArea product={product} />
			<MidArea product={product} />
			<BottomArea product={product} />
		</Container>
	)
}
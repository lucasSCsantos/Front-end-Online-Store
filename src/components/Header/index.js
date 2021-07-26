import React, { useState } from 'react';
import { Container, Logo, Search, Icons, ContentArea } from './styled';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { useDispatch } from 'react-redux';
import { product_action } from '../../action';

export default function Page() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	const searchProducts = async () => {
		const products = await getProductsFromCategoryAndQuery('CATEGORY_ID', search);
		dispatch(product_action(products.results))
	}

	return (
		<Container>
			<ContentArea>
				<Logo >
					Alser.kz
				</Logo>
				<Search>
					<form>
						<input
							type="text"
							placeholder="Encontre o produto"
							value={search}
							onChange={({target}) => {
								setSearch(target.value);
							}}
						/>
						<button type="button">
							M
						</button>
						<button type="button" onClick={searchProducts}>
							S
						</button>
					</form>
				</Search>
				<Icons>
					Icons
				</Icons>
			</ContentArea>
		</Container>
	)
}

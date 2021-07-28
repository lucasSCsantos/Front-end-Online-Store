import React, { useState } from 'react';
import { Container, Logo, Search, Icons, ContentArea } from './styled';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../action';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

export default function Page() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const categoryId = useSelector(state => state.products.category);

	const searchProducts = async () => {
		if (search) {
			dispatch(fetchProducts('CATEGORY_ID', search))
		}
	};

	return (
		<Container>
			<ContentArea>
				<Link to="/">
					<Logo >
						Alser.kz
					</Logo>
				</Link>
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
						<button type="button" className="menuBtn">
							<MenuIcon />
						</button>
						<button
							type="button"
							onClick={() => {
							searchProducts();
							setSearch('');
							}}
							className="searchBtn"
						>
							<SearchIcon />
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

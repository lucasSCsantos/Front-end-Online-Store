import React, { useState } from 'react';
import { Container, Logo, Search, Icons, ContentArea } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, search_action } from '../../action';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';

export default function Page() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const categoryId = useSelector(state => state.products.category);
	const history = useHistory();

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
						<Link
							className="search"
							to={`/search/${search}`}
						>
							<button
								type="button"
								onClick={() => {
								searchProducts();
								setSearch('');
								dispatch(search_action(search));
								}}
								className="searchBtn"
							>
								<SearchIcon />
							</button>
						</Link>
					</form>
				</Search>
				<Icons>
					Icons
				</Icons>
			</ContentArea>
		</Container>
	)
}

import React, { useState } from 'react';
import { Container, Logo, Search, Icons, ContentArea } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, search_action } from '../../action';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function Page() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	// const [sidebarOpen, setSidebarOpen] = useState(true);
	const categoryId = useSelector(state => state.products.category);
	const history = useHistory();

	const searchProducts = async (e) => {
		if (search) {
			dispatch(fetchProducts('CATEGORY_ID', search))
			dispatch(search_action(search));
			setSearch('');
			history.push(`/search/${search}`);
			e.preventDefault()
		}
	};

	return (
		<Container>
			<ContentArea>
				<Link to="/">
					<Logo>
						Alser.kz
					</Logo>
				</Link>
				<Search>
					<form onSubmit={(event) => {
						searchProducts(event);
					}}>
						<input
							type="text"
							placeholder="Encontre o produto"
							value={search}
							onChange={({target}) => {
								setSearch(target.value);
							}}
						/> 
						<button
						type="button"
						className="menuBtn"
						>
							<MenuIcon />
						</button>
							<button
								type="submit"
								className="searchBtn"
							>
								<SearchIcon />
							</button>
					</form>
				</Search>
				<Icons>
					<FavoriteBorderIcon />
					<Link to="/cart">
						<ShoppingCartOutlinedIcon />
					</Link>
				</Icons>
			</ContentArea>
		</Container>
	)
}

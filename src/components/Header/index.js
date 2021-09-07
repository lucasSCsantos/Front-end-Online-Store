import React, { useEffect, useState } from 'react';
import { Container, Logo, Search, Icons, ContentArea } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, search_action } from '../../action';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function Page() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const [cartCount, setCartCount] = useState(0);
	const [favCount, setFavCount] = useState(0);
	const history = useHistory();
	const { pathname } = useLocation();

	const searchProducts = async (e) => {
		if (search) {
			dispatch(fetchProducts('CATEGORY_ID', search))
			dispatch(search_action(search));
			setSearch('');
			history.push(`/search/${search}`);
			e.preventDefault();
		}
	};

	useEffect(() => {
		const cartItems = JSON.parse(localStorage.getItem('cartItems'));
		const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));
		if (cartItems) setCartCount(cartItems.length);
		if (favoriteItems) setFavCount(favoriteItems.length);
	}, [pathname])

	return (
		<Container>
			<ContentArea>
				<Link to="/">
					<Logo>
					LucaSTore
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
					<Link to="/favorites">
						{favCount > 0 && <div className="fav-count">{favCount}</div>}
						<FavoriteBorderIcon />
					</Link>
					<Link to="/cart">
						{cartCount > 0 && <div className="cart-count">{cartCount}</div>}
						<ShoppingCartOutlinedIcon />
					</Link>
				</Icons>
			</ContentArea>
		</Container>
	)
}

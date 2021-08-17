import React, { useState } from 'react';
import { Container, Logo, Search, Icons, ContentArea } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, search_action } from '../../action';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import Sidebar from 'react-sidebar';

export default function Page() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	// const [sidebarOpen, setSidebarOpen] = useState(true);
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
						<button
						type="button"
						className="menuBtn"
						// onClick={() => setSidebarOpen(true)}
						>
							<MenuIcon />
						</button>
							<button
								type="button"
								onClick={() => {
									if (search) {
										searchProducts();
										dispatch(search_action(search));
										history.push(`/search/${search}`);
										setSearch('');
									}
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

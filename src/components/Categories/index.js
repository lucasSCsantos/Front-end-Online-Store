import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { category_action, fetchProducts } from '../../action';
import { getCategories } from '../../services/api';
import { Categories, Category, Container } from './styled';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import LocalPizzaOutlinedIcon from '@material-ui/icons/LocalPizzaOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ChildFriendlyOutlinedIcon from '@material-ui/icons/ChildFriendlyOutlined';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';
import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { Link } from 'react-router-dom';

export default function Page() {
	
	const icons = [
		{ icon: <DriveEtaOutlinedIcon /> },
		{ icon: <LocalShippingOutlinedIcon /> },
		{ icon: <LocalPizzaOutlinedIcon /> },
		{ icon: <PetsOutlinedIcon /> },
		{ icon: <AlbumOutlinedIcon /> },
		{ icon: <BrushOutlinedIcon /> },
		{ icon: <ChildFriendlyOutlinedIcon /> },
		{ icon: <SpaOutlinedIcon /> },
		{ icon: <DirectionsBikeOutlinedIcon /> },
		{ icon: <CardGiftcardOutlinedIcon /> },
		{ icon: <CameraAltOutlinedIcon /> },
	];

	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();
	
	useEffect(() => {
		const getCategoriesList = async () => {
			const categories = await getCategories();
			setCategories(categories);
		}

		getCategoriesList();
	}, [])


	const getProductByCategory = async (categoryId) => {
		dispatch(fetchProducts(categoryId, 'QUERY'));
	}

	return (
		<Container>
			<Categories>
				{categories.slice(0,11).map((category, index) => (
					<Link
						to={`/category/${category.name.replace(/\s/g, '-').toLowerCase()}`}
						onClick={() => dispatch(category_action(category.name))}
					>
						<Category key={ index } onClick={() => getProductByCategory(category.id)} aria-hidden="true">
							<p>{category.name}</p>
							{icons[index].icon}
						</Category>
					</Link>
				))}
			</Categories>
		</Container>
	)
}

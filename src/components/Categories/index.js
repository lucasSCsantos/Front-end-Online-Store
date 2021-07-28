import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { category_action, fetchProducts, product_action } from '../../action';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
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
		// const products = await getProductsFromCategoryAndQuery(categoryId, 'QUERY');
		dispatch(fetchProducts(categoryId, 'QUERY'));
		// dispatch(product_action(products.results));
		// dispatch(category_action(categoryId));
	}

	return (
		<Container>
			<Categories>
				{categories.slice(0,11).map((category, index) => (
					<Category key={ index } onClick={() => getProductByCategory(category.id)} aria-hidden="true">
						<p>{category.name}</p>
						{icons[index].icon}
					</Category>
				))}
			</Categories>
		</Container>
	)
}

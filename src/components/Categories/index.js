import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
import { Categories, Category, Container } from './styled';

export default function Page() {
	
	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		getCategoriesList();
	}, [])

	const getCategoriesList = async () => {
		const categories = await getCategories();
		setCategories(categories);
	}

	return (
		<Container>
			<Categories>
				{categories.slice(0,11).map((category, index) => (
					<Category key={ index }>
						<p>{category.name}</p>
					</Category>
				))}
			</Categories>
		</Container>
	)
}

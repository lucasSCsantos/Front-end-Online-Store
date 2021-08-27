const addToFavorite = (product) => {
	if (localStorage.getItem('favoriteItems')) {
		let index;
		const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));
		const condition = favoriteItems.some((item) => {
			if (item.id === product.id) {
				index = favoriteItems.indexOf(item);
				return true;
			}
		});
		if (!condition) {
			localStorage.favoriteItems = JSON.stringify([...favoriteItems, product]);
		} else {
			localStorage.favoriteItems = JSON.stringify([
				...favoriteItems.slice(0, index), 
				...favoriteItems.slice(index + 1),
			]);
		}
	} else {
		localStorage.favoriteItems = JSON.stringify([product]);
	}
}

export default addToFavorite;
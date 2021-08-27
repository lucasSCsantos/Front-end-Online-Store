const addToCart = (product) => {
	const itemToAdd = {
		title: product.title,
		price: product.price,
		id: product.id,
		thumbnail: product.thumbnail,
		count: 1,
	}
	if (localStorage.getItem('cartItems')) {
		const cartItems = JSON.parse(localStorage.getItem('cartItems'));
		const condition = cartItems.some(({id}) => id === product.id);
		const count = condition 
			?	cartItems.reduce((acc, curr) => {
				if (curr.id === product.id) {
					return acc + 1;
				}
				return acc;
			}, 1) 
			: 1;
		itemToAdd.count = count;
		localStorage.cartItems = JSON.stringify([
			...cartItems, 
			itemToAdd
		])
	} else {
		localStorage.cartItems = JSON.stringify([itemToAdd]);
	}
}

export default addToCart;
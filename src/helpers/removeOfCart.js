const removeOfCart = (product) => {
	const cartItems = JSON.parse(localStorage.getItem('cartItems'));
	let index;
	const condition = cartItems.some((item) => {
		if (item.id === product.id && item.count === product.count) {
			index = cartItems.indexOf(item);
			return true;
		}
	});
	if (condition) {
		localStorage.cartItems = JSON.stringify([
			...cartItems.slice(0, index), 
			...cartItems.slice(index + 1),
		])
	}
}

export default removeOfCart;
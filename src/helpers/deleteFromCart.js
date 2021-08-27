const deleteFromCart = (product) => {
	const cartItems = JSON.parse(localStorage.getItem('cartItems'));
	const newList = cartItems.filter((item) => !(item.id === product.id));
	localStorage.cartItems = JSON.stringify(newList);
}

export default deleteFromCart;
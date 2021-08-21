import React from 'react'
import repeatCount from '../../helpers/repeatCount';
import { Container, CartItem, CartTotal } from './styled'

export default function Page() {
	const cartItems = JSON.parse(localStorage.cartItems);
	const correctCart = () => {
		const newCart = cartItems.filter((item) => {
			if ((repeatCount(cartItems, item.id) > 1 && item.count === repeatCount(cartItems, item.id)) || repeatCount(cartItems, item.id) === 1) {
				return item;
			}
		})
		return newCart;
	}

	return (
		<Container>
			<p className="top">Carrinho</p>
			{correctCart() && correctCart().map((item) => {
				return (
				<CartItem>
					<img src={item.img} />
					<div className="middle">
						<small>
							{`Código do produto: ${item.id}`}
						</small>
						<p>{item.title}</p>
						<p>{item.price}</p>
					</div>
					<p>{item.count}</p>
				</CartItem>
			)})}
			<CartTotal>

			</CartTotal>
		</Container>
	)
}

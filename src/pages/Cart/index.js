import React, { useEffect, useState } from 'react'
import addToCart from '../../helpers/addToCart';
import deleteFromCart from '../../helpers/deleteFromCart';
import removeOfCart from '../../helpers/removeOfCart';
import repeatCount from '../../helpers/repeatCount';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Container, CartItem, CartTotal, Content, EmptyCart } from './styled'

export default function Page() {
	const cartItems = JSON.parse(localStorage.getItem('cartItems'));
	const [list, setList] = useState(false);
	const [total, setTotal] = useState(0);
	const [att, setAtt] = useState(0);

	const correctCart = () => {
		const newList = cartItems.filter((item) => {
			if((repeatCount(cartItems, item.id) > 1 && item.count === 1)) {
				item.count = repeatCount(cartItems, item.id);
				return item;
			} else if (repeatCount(cartItems, item.id) === 1) {
				return item;
			}
		})
		const totalPrice = newList.reduce((acc, curr) => {
			return acc + (curr.price * curr.count);
		}, 0)
		setTotal(totalPrice);
		setList(newList);
	}

	useEffect(() => {
		if (cartItems) {
			correctCart();
		}
	}, [att]);

	return (
		<Container>
			<p className="top">Carrinho</p>
			<Content>
				<div className="items-area">
					{(list && list.length > 0) ? list.map((item, index) => {
						return (
							<CartItem key={index}>
								<img src={item.thumbnail} alt={item.title} />
								<div className="middle">
									<small>
										{`Código do produto: ${item.id}`}
									</small>
									<p className="cart-product-title">{item.title}</p>
									<p className="cart-product-price">R$<span>{item.price.toFixed(2)}</span></p>
								</div>
								<div className="item-count">
									<button 
										type="button"
										onClick={() => {addToCart(item); setAtt(att+1)}}
									>
										+
									</button>
									<p>{item.count}</p>
									<button
										type="button"
										onClick={() => {removeOfCart(item); setAtt(att+1)}}>
										-
									</button>
								</div>
								<div className="item-delete">
									<button type="button" className="delete" onClick={() => {deleteFromCart(item); setAtt(att+1)}}>
										X
									</button>
								</div>
							</CartItem>
					)})
					: <EmptyCart>
							<ShoppingCartOutlinedIcon />
							<p>Seu carrinho está <span>vazio</span></p>
						</EmptyCart>
					}
				</div>
				<CartTotal>
					<div className="total-price">
						<p>Valor a pagar:</p>
						<p className="cart-total">R$<span>{total.toFixed(2)}</span></p>
					</div>
					<button type="button" disabled={list.length > 0 ? false : true}>
						Fazer Compra
					</button>
				</CartTotal>
			</Content>
		</Container>
	)
}

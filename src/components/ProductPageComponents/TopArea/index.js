import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Container, RightTop, Info, Price, PriceBottom } from './styled';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StarRatings from 'react-star-ratings';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import addToCart from '../../../helpers/addToCart';
import { useHistory } from 'react-router';
import addToFavorite from '../../../helpers/addToFavorite';

export default function Page() {
	const product = useSelector(state => state.products.product)
	const { title, thumbnail, price, accepts_mercadopago, shipping, id, available_quantity } = product;
	const [isFavorite, setIsFavorite] = useState(false);
	const [isInCart, setIsInCart] = useState(false);
	const productRate = localStorage.productRates
		? JSON.parse(localStorage.productRates)[id] : 0;
	const history = useHistory();
	const cartList = JSON.parse(localStorage.getItem('cartItems'));
	const favoriteList = JSON.parse(localStorage.getItem('favoriteItems'));

	useEffect(() => {
		const favorite = favoriteList && favoriteList.some(({id}) => id === product.id);
		const cart = cartList && cartList.some(({id}) => id === product.id);
		setIsInCart(cart);
		setIsFavorite(favorite);
	}, [])

	return (
		<Container>
				<Info>
					<div className="title">
						{title}
						<br/>
						<small>
							Código do produto:
							<span>
								{id}
							</span>
						</small>
						<small>
							Status:
							<span>
								{available_quantity > 0 ? "Disponível" : "Indisponível" }
							</span>
						</small>
						<br/>
						<StarRatings
							rating={productRate}
							starRatedColor="#F37B35"
							starHoverColor="#F37B35"
							starDimension="15px"
							numberOfStars={5}
							name='rating'
						/>
					</div>
					<div className="image">
						<img src={thumbnail} alt={title} />
					</div>
					<div className="bottom">
						<p>
							As imagens de produtos no site podem ser diferentes da aparência real dos produtos (cor, textura, design e equipamento).
						</p>
						<small>
							Ao encomendar produtos de outra cidade, é cobrada uma taxa de 12 reais.
						</small>
					</div>
				</Info>
				<RightTop>
					<Price> 
						<div className="priceArea">
							{shipping.free_shipping &
							<span className="shipping">
								<LocalShippingOutlinedIcon />
								Frete Grátis
							</span>
							}
							<p className="price">R$	<span>{price ? price.toFixed(2) : 0}</span></p>
						</div>
						<small>Este produto {accepts_mercadopago ? 'aceita' : 'não Aceita'} mercado pago</small>
						<PriceBottom>
							<button
								type="button"
								className="addFavorite"
								onClick={() => {addToFavorite(product); setIsFavorite(!isFavorite)}}
							>
								{ !isFavorite ? 
									<FavoriteBorderIcon style={{
										position: 'absolute',
										left: '10px',
									}} /> : 
									<FavoriteIcon style={{
										position: 'absolute',
										left: '10px',
									}} />
								}
								<p>Curtir</p>
							</button>
							<button
								type="button"
								className="addToCart"
								onClick={() => {addToCart(product); ; setIsInCart(true)}}
							>
								<p>Comprar</p>
								{	isInCart ?
									<ShoppingCartIcon style={{
										position: 'absolute',
										right: '10px',
									}} /> :
									<ShoppingCartOutlinedIcon style={{
										position: 'absolute',
										right: '10px',
									}} />
								}
							</button>
						</PriceBottom>
					</Price>
				</RightTop>
			</Container>
	)
}

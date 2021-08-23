import React from 'react'
import { useSelector } from 'react-redux';
import { Container, RightTop, Info, Price, PriceBottom } from './styled';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarRatings from 'react-star-ratings';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import addToCart from '../../../helpers/addToCart';
import { useHistory } from 'react-router';

export default function Page() {
	const product = useSelector(state => state.products.product)
	const { title, thumbnail, price, accepts_mercadopago, shipping, id, available_quantity } = product;
	const productRate = localStorage.productRates
		? JSON.parse(localStorage.productRates)[id] : 0;
	const history = useHistory();

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
							{shipping.free_shipping &&
							<span className="shipping">
								<LocalShippingOutlinedIcon />
								Frete Grátis
							</span>
							}
							<p className="price">R$	<span>{price.toFixed(2)}</span></p>
						</div>
						<small>Este produto {accepts_mercadopago ? 'aceita' : 'não Aceita'} mercado pago</small>
						<PriceBottom>
							<button
								type="button"
								className="addToCart"
								onClick={() => {addToCart(product); history.push('/cart')}}
							>
								<p>Comprar</p>
								<ShoppingCartIcon style={{
									position: 'absolute',
									right: '10px',
								}} />
							</button>
							{/* <button type="button" className="favorite">
								<FavoriteBorderIcon style={{
									position: 'absolute',
									left: '10px',
								}} />
								<p>Curtir</p>
							</button> */}
						</PriceBottom>
					</Price>
					<div className="links">

					</div>
				</RightTop>
			</Container>
	)
}

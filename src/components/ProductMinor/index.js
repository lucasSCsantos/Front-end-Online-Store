import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getDetails } from '../../action';
import { Product, Img } from './styled';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StarRatings from 'react-star-ratings';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import addToCart from '../../helpers/addToCart';
import addToFavorite from '../../helpers/addToFavorite';

export default function Page({product}) {
	const dispatch = useDispatch();
	const history = useHistory();
	const cartList = JSON.parse(localStorage.getItem('cartItems'));
	const favoriteList = JSON.parse(localStorage.getItem('favoriteItems'));
	const [isFavorite, setIsFavorite] = useState(false);
	const [isInCart, setIsInCart] = useState(false);
	const productRate = localStorage.productRates
	? JSON.parse(localStorage.productRates)[product.id] : 0;

	useEffect(() => {
		const favorite = favoriteList && favoriteList.some(({id}) => id === product.id);
		const cart = cartList && cartList.some(({id}) => id === product.id);
		setIsInCart(cart);
		setIsFavorite(favorite);
	}, [])
	//me lembra de tirar
	return (
			<Product>
				<Link
					className="details"
					to={ `/product/${encodeURIComponent(product.title.replace(/\s/g, '-').toLowerCase())}`}
					onClick={() => dispatch(getDetails(product))}
				>
					<Img>
						<img src={product.thumbnail} alt={product.title} />
					</Img>
				</Link>
				<StarRatings
					rating={productRate}
					starRatedColor="#F37B35"
					starHoverColor="#F37B35"
					starDimension="15px"
					numberOfStars={5}
					name='rating'
				/>
				<Link
					className="detailsP"
					to={ `/product/${encodeURIComponent(product.title.replace(/\s/g, '-').toLowerCase())}`}
					onClick={() => dispatch(getDetails(product))}
				>
					{product.title.slice(0, 50)}
				</Link>
				<div className="product-m-bottom">
					<button
						type="button"
						className="m-left"
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
					<p className="product-m-price">R$	<span>{product.price ? product.price.toFixed(2) : 0}</span></p>
					<button
						type="button"
						className="m-right"
						onClick={() => {addToCart(product); history.push('/cart'); setIsInCart(true)}}
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
				</div>
				{/* <p className="product-price">R$	<span>{product.price.toFixed(2)}</span></p> */}
			</Product>
	)
}

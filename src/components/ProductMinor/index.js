import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../../action';
import { Product, Img } from './styled';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarRatings from 'react-star-ratings';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import addToCart from '../../helpers/addToCart';

export default function Page({index, product}) {
	const dispatch = useDispatch();
	const productRate = localStorage.productRates
	? JSON.parse(localStorage.productRates)[product.id] : 0;
	return (
			<Product key={index}>
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
					<button type="button" className="m-left">
						<FavoriteBorderIcon style={{
							position: 'absolute',
							left: '10px',
						}} />
						<p>Curtir</p>
					</button>
					<p className="product-m-price">R$	<span>{product.price.toFixed(2)}</span></p>
					<button
						type="button"
						className="m-right"
						onClick={() => addToCart(product)}
					>
						<p>Comprar</p>
						<ShoppingCartIcon style={{
							position: 'absolute',
							right: '10px',
						}} />
					</button>
				</div>
				{/* <p className="product-price">R$	<span>{product.price.toFixed(2)}</span></p> */}
			</Product>
	)
}

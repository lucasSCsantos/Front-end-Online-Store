import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../../action';
import { Product, Img } from './styled';

export default function Page({index, product}) {
	const dispatch = useDispatch();
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
				<Link
					className="detailsP"
					to={ `/product/${encodeURIComponent(product.title.replace(/\s/g, '-').toLowerCase())}`}
					onClick={() => dispatch(getDetails(product))}
				>
					{product.title.slice(0, 50)}
				</Link>
				<p className="price">R${product.price.toFixed(2)}</p>
			</Product>
	)
}

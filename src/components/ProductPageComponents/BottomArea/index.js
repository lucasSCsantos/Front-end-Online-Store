import React, { useEffect, useState } from 'react';
import { Comment, Comments, Container } from './styled';
import StarRatings from 'react-star-ratings';

export default function Page({product}) {

	const [comment, setComment] = useState('');
	const [rating, setRating] = useState(0);
	const [totalRating, setTotalRating] = useState(0);
	const [comments, setComments] = useState(
		JSON.parse(localStorage.getItem('productComments'))[product.title] 
			? JSON.parse(localStorage.getItem('productComments'))[product.title] 
				: []);
	const setCommentsOnLocalStorage = (commentsArr, rate) => {
		const productComments = JSON.parse(localStorage.getItem('productComments'));
		const productRates = JSON.parse(localStorage.getItem('productRates'));
		if (productComments) {
			localStorage.productComments = JSON.stringify({...productComments, [product.title]: commentsArr});
		}
	}

	useEffect(() => {
		const actualProductComments = JSON.parse(localStorage.productComments)[product.title];
		const productRates = JSON.parse(localStorage.getItem('productRates'));
		if (actualProductComments) {
			const total = actualProductComments.reduce((acc, curr) => {
				return acc + curr.rating;
			}, 0)
			localStorage.productRates = JSON.stringify({...productRates, [product.title]: total/actualProductComments.length})
		}
		// console.log(total);
	}, [comments])

	return (
		<Container>
			<h1>
				Avalie
			</h1>
			<Comment>
				<form>
					<input
						type="text"
						placeholder="Escreva um comentário..."
						value={comment}
						onChange={({target}) => { setComment(target.value)}}
					/>
					<StarRatings
						rating={rating}
						starRatedColor="#F37B35"
						starHoverColor="#F37B35"
						starDimension="25px"
						changeRating={setRating}
						numberOfStars={5}
						name='rating'
					/>
					<button
						type="button"
						onClick={() => {
							if (comment.length > 0) {
								setComments([...comments, {
									comment,
									rating,
								}]);
								setComment('');
								setRating(0);
							}
							setCommentsOnLocalStorage([...comments, {
								comment,
								rating,
							}]);
						}}
					>
						Avaliar
					</button>
				</form>
				<Comments>
					<h2>Comentários mais recentes:</h2>
					{ comments && comments.slice(comments.length - 5, comments.length).map((comment, index) => {
						return (
							<div key={index}>
								<div className="comment">
									<p>{comment.comment}</p>
									<StarRatings
										rating={comment.rating}
										starRatedColor="#F37B35"
										starDimension="15px"
										numberOfStars={5}
										name='rating'
									/>
								</div>
								<hr />
							</div>
						)
					})}
				</Comments>
			</Comment>
		</Container>
	)
}

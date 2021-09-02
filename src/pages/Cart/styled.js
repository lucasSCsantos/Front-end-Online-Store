import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #FBFBFB;
	flex-direction: column;

	.top {
		align-self: flex-start;
		margin-left: 361px;
		color: #5A5555;
		font-size: 20px;
		font-weight: 800;
	}
`;

export const CartItem = styled.div`
	display: flex;
	width: 720px;
	padding: 15px;
	background-color: white;
	margin-bottom: 20px;
	img {
		height: 131px;
		width: 131px;
		object-fit: contain;
		background-color: white;
	}

	.middle {
		margin-left: 20px;
		small {
			font-weight: 300;
			color: gray;
		}
		.cart-product-title {
			font-weight: 700;
    	font-size: 16px;
			width: 305px;
			color: #363636;
			margin-top: 15px;
			margin-bottom: -12px;
			/* line-height: 20px; */
		}
	}

	.item-count {
		/* background-color: greenyellow; */
		width: 131px;
		display: flex;
		align-items: center;
		justify-content: center;

		button {
			background-color: #F2F2F2;
			width: 7.375px;
			border-radius: 50px;
			border: none;
			height: 18px;
			box-sizing: content-box;
			padding: 4px 10px;
			margin: 0 15px;
			cursor: pointer;
		}
	}

	.item-delete {
		width: 131px;
		display: flex;
		align-items: center;
		justify-content: center;
		/* background-color: red; */

		button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			font-size: 20px;
		}
	}

	.cart-product-price {
		font-size: 12px !important;
		font-weight: 700;
		color: gray !important;
		margin-top: 15px;
		span {
			font-size: 18px;
			color: black;
		}
	}
`;

export const CartTotal = styled.div`
	height: 106.9px;
	width: 310px;
	background-color: white;
	padding: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.total-price {
		display: flex;
		/* background-color: red; */
		height: 37px;
		align-items: center;
		justify-content: space-between;
		p {
			font-size: 18px;
		}
		.cart-total {
			font-size: 14px !important;
			font-weight: 700;
			color: gray !important;
			margin-top: 15px;
			span {
				font-size: 28px;
				color: black;
			}
		}
	}
	button {
		width: 284px;
		box-sizing: content-box;
		padding: 6px 12px;
		background-color: #34A153;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		color: white;
		transition: opacity 0.1s;
		&:disabled {
			opacity: 0.7;
			transition: opacity 0.2s;
		}
		&:active {
			background-color: #1E5E30;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	width: 61%;
	min-height: 60vh;
	justify-content: space-between;
`
export const EmptyCart = styled.div`
	opacity: 0.7;
	height: 500px;
	width: 700px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	svg {
		width: 200px;
		height: 200px;
		color: #52A254;
	}
	p {
		margin-top: -10px;
		font-weight: 900;
		font-size: 20px;
		span {
			color: #EC603D;
			font-size: 30px;
		}
	}
`
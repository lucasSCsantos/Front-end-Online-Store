import styled from 'styled-components';

export const Product = styled.div`
	height: 321px;
	width: 230.5px;
	padding: 15px 15px 7px 15px;
	margin: 0 6.5px 0 20px;
	border:  #FBFBFB 1px solid;
	margin-bottom: 30px;
	background-color: white;
	border-radius: 2px;
	box-shadow: 0 15px 10px rgb(0 0 0 / 2%);
	display: flex;
	flex-direction: column;
	transition: 0.2s ease;
	position: relative;
	/* background-color: blue; */
	&:hover {
		box-shadow: 0 15px 20px rgb(0 0 0 / 10%);
		transition: 0.2s ease;
	}

	.product-bottom {
		/* justify-content: space-between; */
		background-color: white;
		width: 260.5px;
		margin-left: -15px;
		height: 55px;
		margin-top: 40px;
		display: flex;
		position: absolute;
		justify-content: center;
		/* bottom: 50px; */
		/* margin-bottom: 100px; */
		top: 248px;
		z-index: 10;
		.left {
			height: 55px;
			width: 55px;
			border: none;
			border-radius: 0 50px 50px 0;
			position: absolute;
			right: 206px;
			border: 5px solid #fbfbfb;
			border-left: none;
		}

		.right {
			height: 55px;
			width: 55px;
			border: 5px solid #fbfbfb;
			border-right: none;

			background-color: #E6F4E7;
			border-radius: 50px 0 0 50px;
			position: relative;
			display: flex;
			align-items: center;
			transition: ease 0.2s;
			color: #34A153;
			position: absolute;
			left: 206px;
			font-weight: 700;
			p {
				opacity: 0;
				transition: opacity 0.1s ease-in-out;
			}
			&:hover {
				width: 110px;
				position: absolute;
				left: 151.5px;
				transition: ease 0.2s;
				p {
					margin-left: 5px;
					opacity: 1;
					transition: opacity 0.1s ease-in-out;
				}
			}
		}
	}

	.product-price {
		/* position: absolute; */
		/* align-self: center; */
		/* background-color: blue; */
		font-size: 12px;
		font-weight: 700;
		color: grey;
		margin-top: 15px;
		/* text-align: center; */
		span {
			font-size: 18px;
			color: black;
			/* background-color: brown; */
		}
	}

	.detailsP {
		text-decoration: none;
		color: black;
		margin-top: 5px;
		&:hover {
			color: #388E3B;
		}
	}
`;

export const Img = styled.div`
	/* background-color: hotpink; */
	width: 100%;
	height: 198px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		object-fit: cover;
		width: 100px;
	}
`

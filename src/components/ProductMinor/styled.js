import styled from 'styled-components';

export const Product = styled.div`
	height: 323px;
	width: 198px;
	padding: 10px 12px;
	margin: 0 5px 0 5px;
	border:  #FBFBFB 1px solid;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 2px;
	box-shadow: 0 15px 10px rgb(0 0 0 / 2%);
	display: flex;
	flex-direction: column;
	transition: 0.2s ease;
	position: relative;

	&:hover {
		box-shadow: 0 15px 20px rgb(0 0 0 / 10%);
		transition: 0.2s ease;
	}

	.price {
		align-self: center;
	}

	.detailsP {
		text-decoration: none;
		color: black;
		margin-top: 5px;
		line-height: 25px;
		&:hover {
			color: #388E3B;
		}
	}

	.product-m-bottom {
		/* background-color: red; */
		display: flex;
		position: absolute;
		justify-content: center;
		width: 222px;
		margin-left: -12px;
		top: 286px;
		background-color: white;
		height: 57px;
		.m-left {
			top: 1px;
			cursor: pointer;
			height: 55px;
			width: 55px;
			border: none;
			border-radius: 0 50px 50px 0;
			position: absolute;
			right: 167.5px;
			display: flex;
			align-items: center;
			border: 5px solid #fbfbfb;
			border-left: none;
			background-color: #FBE9E7;
			transition: ease 0.2s;
			font-weight: 700;
			color: #F6612F;
			p {
				opacity: 0;
				margin-left: 40px;
				transition: opacity 0.1s ease-in-out;
			}
			&:hover {
				width: 110px;
				position: absolute;
				/* left: -1px; */
				right: 112.5px;
				transition: ease 0.2s;
				p {
					margin-left: 40px;
					opacity: 1;
					transition: opacity 0.1s ease-in-out;
				}
			}
		}
		.m-right {
			cursor: pointer;
			background-color: #E6F4E7;
			display: flex;
			overflow: hidden;
			align-items: center;
			position: absolute;
			top: 1px;
			height: 55px;
			width: 55px;
			left: 168px;
			color: #34A153;
			font-weight: 700;
			border-radius: 50px 0 0 50px;
			border: 5px solid #fbfbfb;
			border-right: none;
			transition: ease 0.2s;
			p {
				opacity: 0;
				transition: opacity 0.1s ease-in-out;
				margin-right: 40px;
			}
			&:hover {
				width: 110px;
				position: absolute;
				left: 113.5px;
				transition: ease 0.2s;
				p {
					margin-left: 5px;
					opacity: 1;
					transition: opacity 0.1s ease-in-out;
				}
			}
		}
	}

	.product-m-price {
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
	@media (max-width: 600px) {
		margin-left: 0;
		margin-right: 0;
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

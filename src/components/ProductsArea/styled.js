import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: white;
	flex-direction: column;
`;

export const Products = styled.div`
	width: 61%;
	display: flex;
	flex-wrap: wrap;
	/* background-color: hotpink; */
	justify-content: space-between;
	padding: 35px 0 70px 0;
`;

export const Product = styled.div`
	height: 321px;
	width: 230.5px;
	padding: 15px 15px 7px 15px;
	/* margin: 0 15px; */
	border:  #FBFBFB 1px solid;
	margin-bottom: 30px;
	/* background-color: honeydew; */
	border-radius: 2px;
	box-shadow: 0 15px 10px rgb(0 0 0 / 2%);
	display: flex;
	flex-direction: column;
	transition: 0.2s ease;

	&:hover {
		box-shadow: 0 15px 20px rgb(0 0 0 / 10%);
		transition: 0.2s ease;
	}

	.price {
		align-self: center;
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

export const Button = styled.div`
	background-color: #F2F3F5;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 38px;
	button {
		height: 100%;
		width: 61%;
		border: none;
		background-color: #34A153;
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
		color: white;
		transition: 100ms ease;
		&:hover {
			background-color: #2d8946;
			transition: 100ms ease;
		}
	}
`;

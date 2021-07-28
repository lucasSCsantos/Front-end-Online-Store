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

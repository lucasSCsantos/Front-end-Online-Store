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
	background-color: red;

	img {
		height: 131px;
		width: 131px;
		object-fit: contain;
		background-color: white;
	}

	.middle {
		p {
			font-weight: 700;
    	font-size: 16px;
			width: 305px;
			/* line-height: 20px; */
		}
	}
`;

export const CartTotal = styled.div`

`;

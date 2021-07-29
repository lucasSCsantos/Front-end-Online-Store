import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: blue;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
`;

export const TopArea = styled.div`
	background-color: brown;
	width: 61%;
	display: flex;
	justify-content: space-between;

	.info {
		background-color: green;
		padding: 30px 35px;
		width: 765px;
		height: 573px;
		margin-bottom: 40px;
	}
`

export const RightTop = styled.div`
	.price {
		background-color: green;
		padding: 30px 30px 55px 30px;
		width: 225px;
		height: 94px;
		margin-bottom: 20px;
	}

	.links {
		background-color: green;
		width: 285px;
		height: 312px;
		margin-bottom: 20px;
	}
`

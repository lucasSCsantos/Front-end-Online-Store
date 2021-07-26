import styled from 'styled-components';

export const Container = styled.div`
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.1) -5px 10px 30px;
	display: fixed;
	padding: 10px;
	height: 34px;
`;

export const ContentArea = styled.div`
	display: flex;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	width: 61%;
`;

export const Logo = styled.div`
`;

export const Search = styled.div`

	height: 100%;

	form {
		width: 475px;
		display: flex;
		height: 100%;

		input {
			flex-basis: 76%;
		}
		button {
			flex-basis: 12%;
			cursor: pointer;
		}
	}
`;

export const Icons = styled.div`
`;

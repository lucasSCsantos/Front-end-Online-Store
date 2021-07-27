import styled from 'styled-components';

export const Container = styled.div`
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.1) -5px 10px 30px;
	/* position: fixed; */
	width: 100%;
	display: flex;
	box-sizing: border-box;
	/* padding: 10px; */
	padding: 10px 0;
	height: 54px;
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
			border-radius: 4px 0 0 4px;
			border: none;
			background-color: #FBFBFB;
			border: solid 1px #F2F3F5;
			padding: 5px 10px;
		}

		input:focus {
			outline: none;
			border: solid 1px #5cb85c;
		}

		.menuBtn {
			display: flex;
			justify-content: center;
			align-items: center;
			outline: none;
			border: solid 1px #F2F3F5;
			color: #34a153;
			background-color: #FBFBFB;
		}

		.searchBtn {
			display: flex;
			justify-content: center;
			align-items: center;
			outline: none;
			border: solid 1px #F2F3F5;
			color: white;
			background-color: #34a153;
			border-radius: 0 2px 2px 0;
		}

		input::placeholder {
			font-size: 12px;
		}

		.searchBtn:active {
			background-color: #398439;
		}

		button {
			flex-basis: 12%;
			cursor: pointer;
		}
	}
`;

export const Icons = styled.div`
`;

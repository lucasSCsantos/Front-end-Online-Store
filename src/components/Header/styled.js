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
			transition: ease 0.2s;
		}

		input:focus {
			outline: none;
			border: solid 1px #5cb85c;
			transition: ease 0.2s;
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

		.search, .searchBtn {
			display: flex;
			justify-content: center;
			align-items: center;
			outline: none;
			border: none;
			color: white;
			background-color: #34a153;
			border-radius: 0 2px 2px 0;
		}

		input::placeholder {
			font-size: 12px;
		}

		.search:active, .searchBtn:active {
			background-color: #398439;
			.searchBtn {
				background-color: #398439;
			}
		}

		button, .search {
			flex-basis: 12%;
			cursor: pointer;
		}

	}
`;

export const Icons = styled.div`
	/* background-color: turquoise; */
	width: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	a {
		color: black;
	}
	.cart-count {
		top: -5px;
		right: -3px;
		position: absolute;
		width: 15px;
		height: 15px;
		color: white;
		font-weight: 700;
		font-size: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		background-color: #F65723;
	}

	.fav-count {
		top: -5px;
		left: 13px;
		position: absolute;
		width: 15px;
		height: 15px;
		color: white;
		font-weight: 700;
		font-size: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		background-color: #F65723;
	}
`;

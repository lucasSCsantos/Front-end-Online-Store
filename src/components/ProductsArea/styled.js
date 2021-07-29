import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-height: 80vh;
	width: 100%;
	background-color: white;
	flex-direction: column;

	.loader {
		margin-top: 100px;
		border: 8px solid #f3f3f3; /* Light grey */
		border-top: 8px solid #2D8946; /* Blue */
		border-radius: 50%;
		width: 100px;
		height: 100px;
		align-self: center;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;

export const Products = styled.div`
	width: 1170px;
	display: flex;
	flex-wrap: wrap;
	/* justify-content: space-between; */
	padding: 35px 0 70px 0;
`;

export const Button = styled.div`
	background-color: #F2F3F5;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 38px;
	.selected {
		cursor: pointer;
		background-color: #34A153;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
		border-radius: 5px;
		color: white;
		border: none;
		transition: 100ms ease;
		&:hover {
			background-color: #2d8946;
			transition: 100ms ease;
		}
	}
	button {
		cursor: pointer;
		border: none;
		background-color: transparent;
		height: 100%;
		width: calc(61%/3);
		transition: 100ms ease;
		&:hover {
			background-color: #ededed;
			transition: 100ms ease;
		}
	}
`;

export const Pages = styled.div`
	/* background-color: blue; */
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 100%;

	.MuiButtonBase-root {
		background-color: transparent;
		border: 1px solid #fbfbfb;
		box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 10px;
	}

	.MuiButtonBase-root:hover {
		background-color: rgba(52, 161, 83, 0.1);
	}

	.MuiPaginationItem-page.Mui-selected {
		background-color: #34A153;
	}
`;

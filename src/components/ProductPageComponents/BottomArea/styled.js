import styled from 'styled-components';

export const Container = styled.div`
	width: 61%;
	h1 {
		font-size: 20px;
		margin: 10px 0;
	}
	@media (max-width: 1000px) {
    width: 80%;
  }
`;

export const Comment = styled.div`
	width: 765px;
	padding: 30px 35px;
	/* height: 60px; */
	background-color: white;

	form {
		display: flex;
		align-items: center;
	}
	input {
		resize: none;
		overflow: hidden;
		min-height: 50px;
		border: lightgray 1px solid;
		width: 400px;
		font-weight: 300;
		border-radius: 5px;
		margin-right: 10px;
		outline: none;
		font-size: 18px;
		padding: 10px 15px;
		box-sizing: border-box;
		transition: ease 0.05s;
		margin-right: 30px;
		&:focus {
			border: 2px solid #34A153;
			/* outline: 2px solid #34A153; */
			margin-bottom: 1px;
			transition: ease 0.05s;
		}
	}

	button {
		margin: 0 0 0 30px;
		height: 50px;
		border: none;
		cursor: pointer;
		width: 130px;
		background-color: #34A153;
		border-radius: 5px;
		color: white;
		font-size: 18px;
		font-weight: 700;
		transition: ease 0.3s;
		&:hover {
			transition: ease 0.3s;
			background-color: #30934c;
		}
	}
	@media (max-width: 1000px) {
    width: 73%;
		form {
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			height: 180px;
			input {
				width: 99%;
				margin-right: 0;
			}
			button {
				margin-left: 0;
			}
		}
  }
`

export const Comments = styled.div`
	h2 {
		margin-top: 30px;
		font-size: 18px;
	}
	
	div {
		margin: 10px 0;
		
		hr {
			border: solid 1px lightgray;
		}
	}
	
	.comment {
		background-color: white;
		display: flex;
		align-items: center;
		flex-direction: column;
		p {
			margin-right: 30px;
		}
	}
`

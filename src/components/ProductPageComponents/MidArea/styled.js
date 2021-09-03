import styled from 'styled-components';

export const Container = styled.div`
	width: 61%;
	/* padding: 10px; */
	/* background-color: blue; */
	/* margin-left: -297px; */
	margin-bottom: 40px;
	
	h1 {
		font-size: 20px;
		margin: 10px 0;
	}
	@media (max-width: 600px) {
    width: 80%;
  }
`;

export const Attributes = styled.div`
	/* height: 310.656px; */
	width: 815px;
	background-color: white;
	padding: 10px;
	font-size: 12px;
	p {
		margin: 0 0 5px 0;
		font-weight: 700;
	}
	tbody {
		/* background-color: greenyellow; */

		tr {
			display: flex;
			td {
				/* background-color: blue; */
				margin: 2px 2px 2px -2px;
				width: 120px;
			}
		}
	}
	@media (max-width: 600px) {
		width: 90%;
  }
`

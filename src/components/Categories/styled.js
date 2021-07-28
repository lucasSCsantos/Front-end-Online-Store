import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 120px;
`;

export const Categories = styled.div`
	display: flex;
	justify-content: space-between;
	width: 61%;
	height: 120px;
	align-items: center;
`

export const Category = styled.div`
	padding: 10px;
	background-color: white;
	box-shadow: 10px 5px 10px rgb(0 0 0 / 5%);
	border-radius: 6px;
	font-size: 12px;
	width: 74.513px;
	overflow: hidden;
	height: 70px;
	display: flex;
	align-items: flex-end;
	cursor: pointer;
	
	p {
		display: flex;
		align-items: flex-end;
		margin-bottom: 0px;
		position: absolute;
		height: 40px;
		width: 70px;
		opacity: 1;
		transition: 0.5s ease;
		z-index: 0;
	}

	svg {
		position: relative;
		right: -50px;
		top: -40px;
		color: #34A153;
		opacity: 0.5;
		font-size: 60px;
		transition: 0.2s ease;
		z-index: 1;
	}

	&:hover {
		svg {
			/* right: -8px;
			top: -5px; */
			transition: 1s ease;
			/* color: #34A153;  */
			opacity: 1;
			animation: alzer linear 0.5s ;
			animation-fill-mode: forwards;  
		}
		p {
			transition: 0.5s ease;
			opacity: 0;
		}
	}

	@keyframes alzer {
		0% { top: -40px;}
		20% { top: -50px; right: -16px;}
		40% { right: -16px; top: -5px;}
		60% { right: -12px; top: -10px;}
		70% { right: -8px; top: -5px;}
		to { right: -8px; top: -5px;}
	}
`

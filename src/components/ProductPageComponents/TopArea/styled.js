import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: brown; */
  width: 61%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
		/* background-color: red; */
    flex-direction: column;
    width: 80%;
  }
`;

export const Info = styled.div`
  background-color: white;
  /* background-color: brown; */
  padding: 30px 35px;
  width: 765px;
  height: 573px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  
  .title {
    flex-basis: 1;
    height: 15%;
    color: #5F5555;
    font-weight: 700;
    font-size: 18px;
    /* background-color: greenyellow; */
  }

  .image {
    height: 400px;
    display: flex;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    /* background-color: blueviolet; */
    img {
      min-width: 300px;
      min-height: 300px;
      /* object-fit: cover; */
    }
  }

  small {
    margin-right: 15px;
    font-weight: 300;
    font-size: 12px;
    span {
      font-weight: 700;
      margin-left: 5px;
      font-size: 12px;
    }
  }

  .bottom {
    /* background-color: blue; */
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* text-align: center; */
    align-items: center;
    p {
      font-size: 13px;
      color: lightgray;
    }
    small {
      font-size: 13px;
      margin-top: -8px;
    }
  }
  @media (max-width: 1000px) {
		width: 100%;
    margin-top: 20px;
    /* background-color: blue; */
    height: 600px;
    justify-content: space-evenly;
    padding: 0;
  }
`;

export const RightTop = styled.div`
  .links {
    background-color: green;
    width: 285px;
    height: 312px;
    margin-bottom: 20px;
  }
`;

export const Price = styled.div`
  background-color: white;
  padding: 30px 30px 55px 30px;
  width: 225px;
  height: 94px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .priceArea {
    width: 110%;
    /* margin-left: -13px; */
    margin-top: -14px;
    /* background-color: blue; */
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      /* font-size: 16px; */
      color: grey;
      span {
        font-size: 28px;
        color: black;
      }
    }
    .shipping {
      align-self: flex-start;
      display: flex;
      align-items: center;
      font-size: 12px;
      justify-content: space-between;
      width: 100px;
      box-shadow: 0px 5px 3px rgba(0,0,0,0.1);
      /* height: 25px; */
      padding: 6px;
      color: white;
      background-color: #34A153;
      border-radius: 2px 10px 10px 10px;
    }
  }

  small {
    color: lightgray;
    font-size: 11px;
  }
`;

export const PriceBottom = styled.div`
  /* background-color: blue; */
  width: 285px;
  height: 55px;
  /* margin-top: 10px; */
  top: 110px;
  display: flex;
  position: absolute;
  justify-content: flex-end;

  .addFavorite {
			cursor: pointer;
			top: 1px;
			height: 55px;
			width: 55px;
			border: none;
			border-radius: 0 50px 50px 0;
			position: absolute;
			right: 230px;
			border: 5px solid #fbfbfb;
			border-left: none;
			background-color: #FBE9E7;
			transition: ease 0.2s;
			display: flex;
			align-items: center;
			font-weight: 700;
			color: #F6612F;
			p {
				opacity: 0;
				margin-left: 40px;
				transition: opacity 0.1s ease-in-out;
			}
			&:hover {
				width: 110px;
				position: absolute;
				right: 174.5px;
				transition: ease 0.2s;
				p {
					margin-left: 40px;
					opacity: 1;
					transition: opacity 0.1s ease-in-out;
				}
			}
		}

  .addToCart {
    position: relative;
    cursor: pointer;
    height: 55px;
    width: 55px;
    border-radius: 50px 0 0 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    border: none;
    transition: ease 0.2s;
    background-color: #E6F4E7;
    color: #35A360;
    font-weight: 700;
    border: 4px solid #FBFBFB;
    p {
      margin-left: -60px;
      margin-right: 20px;
      opacity: 0;
      transition: opacity 0.1s ease-in-out;
    }
    &:hover {
      transition: ease 0.2s;
      width: 120px;
      p {
        margin-left: 10px;
        margin-right: 5px;
        opacity: 1;
        transition: opacity 0.25s ease-in-out;
      }
    }
  }
`
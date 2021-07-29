import React from 'react'
import { useSelector } from 'react-redux'
import { Container, TopArea, RightTop } from './styled'

export default function Page() {
	const product = useSelector(state => state.products.product);
	console.log(product)
	return (
		<Container>
			<TopArea>
				<div className="info">

				</div>
				<RightTop>
					<div className="price"> 

					</div>
					<div className="links">

					</div>
				</RightTop>
			</TopArea>
		</Container>
	)
}

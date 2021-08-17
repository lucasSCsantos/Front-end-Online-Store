import React from 'react'
import { Attributes, Container } from './styled'

export default function index({product}) {
	const { attributes } = product;
	return (
		<Container>
			<h1>
				Descrição
			</h1>
			<Attributes>
				<p>
					Características:
				</p>
				<table>
					<tbody>
						{	attributes &&
							attributes.map((att, index) => {
								return (
									<tr key={index}>
										<td>
											{att.name} 
										</td>
										<td>
											{att.value_name}
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</Attributes>
		</Container>
	)
}

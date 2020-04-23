import React from "react";
import { Card } from "./strain_card";
import '../page/homepage.styles.css'


export const StrainContainer = (props) => {
	console.log(props)
	let strains = props.strains
	return (
		<div className="strain-container">
			{strains.map((strain) => (
				<Card key={strain.id} strain={strain} />
			))}
		</div>
	);
};

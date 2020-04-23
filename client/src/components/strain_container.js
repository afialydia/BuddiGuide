import React from "react";
import { Card } from "./strain_card";
import '../page/homepage.styles.css'


export const StrainContainer = ({strains}) => {
    
	return (
		<div className="strain-container">
			{strains.map((strain) => (
				<Card key={strain.id} strain={strain} />
			))}
		</div>
	);
};

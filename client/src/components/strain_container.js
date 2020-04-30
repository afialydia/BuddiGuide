import React from "react";
import { Card } from "./strain_card";
import "../page/homepage.styles.css";

export const StrainContainer = ({ filteredStrains, allStrains }) => {
	
	if (allStrains) {
		return (
			<div className="strain-container">
				<div className="center">
					{allStrains.map((strain) => (
						<Card key={strain.id} strain={strain} />
					))}
				</div>
			</div>
		);
	} else {
		let strains = filteredStrains;
		return (
			<div className="strain-container">
				<div className="center">
					{strains.map((strain) => (
						<Card key={strain.item.id} strain={strain.item} />
					))}
				</div>
			</div>
			// <></>
		);
	}
};

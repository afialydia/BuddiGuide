import React from "react";
import { StrainContentsCard } from "./strainContents.card";
import "../page/home.styles.css";

export const StrainSortContainer = ({ filteredStrains, allStrains }) => {
	if (allStrains) {
		return (
			<div className="strain-container">
				<div className="center">
					{allStrains.map((strain) => (
						<StrainContentsCard key={strain.id} strain={strain} />
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
						<StrainContentsCard key={strain.item.id} strain={strain.item} />
					))}
				</div>
			</div>
		);
	}
};

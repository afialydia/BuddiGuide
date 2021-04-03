import React from "react";
import { FaveCard } from "./fave.card";
import '../../page/favorites.styles.css'


export const FaveContainer = (props) => {
	let strains = props.strains

	return (
		<div className="strain-container">
			<div className="center">{strains.map((strain) => (
				<FaveCard key={strain.id} strain={strain} />
			))}</div>
		</div>
	);
};

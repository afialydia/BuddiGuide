import React from "react";
import { FavoritesCard } from "./favorite_card";
import '../page/favorites.styles.css'


export const FavoritesContainer = (props) => {
	let strains = props.strains

	return (
		<div className="strain-container">
			<div className="center">{strains.map((strain) => (
				<FavoritesCard key={strain.id} strain={strain} />
			))}</div>
		</div>
	);
};

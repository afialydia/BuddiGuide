import React from "react";
import EditFavorite from "./edit_favorite";
import RemoveFavorite from "./remove_favorite";
import "../page/favorites.styles.css";
import "../page/home.styles.css";

export const FavoritesCard = ({ strain }, props) => {
	const { fid, strain: name, type, personal_rating, notes } = strain;

	return (
		<div className={`card-container ${type}`}>
			<div className="strain-card">
				<div className="favorites-card">
					<span>
						<EditFavorite fid={fid} /> <RemoveFavorite fid={fid} />
					</span>
					<br></br>
					<div className="favorites-content">
						<h3>{name.toUpperCase()}</h3>
						<i>{type.toUpperCase()}</i>
						<br></br>
						<span>
							<i>{personal_rating}</i>
						</span>
						<p>Notes: {notes}</p>
						{/* <p>{strain.fid}</p> */}
					</div>
				</div>
			</div>
		</div>
	);
};

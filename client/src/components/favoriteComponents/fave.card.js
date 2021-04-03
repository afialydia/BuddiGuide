import React from "react";
import EditFave from "./editFave.modal";
import RemoveFavorite from "./removeFave.icon";
import "../../page/favorites.styles.css";
import "../../page/home.styles.css";

export const FaveCard = ({ strain }, props) => {
	const { fid, strain: name, type, personal_rating, notes } = strain;

	return (
		<div className={`card-container ${type}`}>
			<div className="strain-card">
				<div className="favorites-card">
					<span>
						<EditFave fid={fid} /> <RemoveFavorite fid={fid} />
					</span>
					<br></br>
					<div className="favorites-content">
						<h3>{name.toUpperCase()}</h3>
						<i>{type.toUpperCase()}</i>
						<br></br>
						<span>
							<i>{personal_rating}</i>
						</span>
						<p>{"Notes:"} {notes}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

import React from "react";
import EditFavorite from "./edit_favorite";
import RemoveFavorite from "./remove_favorite";
import "../page/favorites.styles.css";
import "../page/homepage.styles.css";

export const FavoritesCard = ({ strain }, props) => {
	// console.log(strain)
	if (strain.type === "sativa") {
		return (
			<div className="card-container sativa">
				<div className="strain-card">
					<div className="favorites-card">
						<span>
							<EditFavorite fid={strain.fid} />{" "}
							<RemoveFavorite fid={strain.fid} />
						</span>
						<div className="favorites-content">
							<h3>{strain.strain.toUpperCase()}</h3>
							<i>{strain.type.toUpperCase()}</i>
							<br></br>
							<span>
								Opinion: <i>{strain.personal_rating}</i>
							</span>
							<p>Notes: {strain.notes}</p>
							{/* <p>{strain.fid}</p> */}
						</div>
					</div>
				</div>
			</div>
		);
	} else if (strain.type === "hybrid") {
		return (
			<div className="card-container hybrid">
				<div className="strain-card">
					<div className="favorites-card">
						<span>
							<EditFavorite fid={strain.fid} />{" "}
							<RemoveFavorite fid={strain.fid} />
						</span>
						<div className="favorites-content">
							<h3>{strain.strain.toUpperCase()}</h3>
							<i>{strain.type.toUpperCase()}</i><br></br>
							<span>
								Opinion: <i>{strain.personal_rating}</i>
							</span>
							<p>Notes: {strain.notes}</p>
							{/* <p>{strain.fid}</p> */}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="card-container indica">
				<div className="strain-card">
					<div className="favorites-card">
						<span>
							<EditFavorite fid={strain.fid} />{" "}
							<RemoveFavorite fid={strain.fid} />
						</span>
						<div className="favorites-content">
							<h3>{strain.strain.toUpperCase()}</h3>
							<i>{strain.type.toUpperCase()}</i><br></br>
							<span>
								Opinion: <i>{strain.personal_rating}</i>
							</span>
							<p>Notes: {strain.notes}</p> 
							{/* <p>{strain.fid}</p> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

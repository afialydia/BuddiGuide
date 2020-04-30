import React from "react";
import "../page/homepage.styles.css";
import useToggle from "../hooks/use_toggle";
import FavoriteStrain from "./favorite";

export const Card = ({ strain }) => {
	const [front, back] = useToggle(true);

	const { id, strain: name, type, effects, flavor, description } = strain;
	return (
		<div className={`card-container ${type}`} onClick={back}>
			<span>
				<FavoriteStrain id={id} />
			</span>
			<div className="strain-card">
				{front ? (
					<div>
						<br />
						<h3>{name.toUpperCase()}</h3>
						<br></br>
						<h6>{type.toUpperCase()}</h6>
						<br />
						<i>{effects}</i>
						<br />
						{/* <p>{strain.id}</p> */}
					</div>
				) : (
					<div>
						<br />
						<h3>{name.toUpperCase()}</h3>
						<br />

						<h6>{flavor}</h6>
						<br />
						<p>{description}</p>
					</div>
				)}
			</div>
		</div>
	);
};

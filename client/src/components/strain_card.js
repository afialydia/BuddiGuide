import React from "react";
import "../page/homepage.styles.css";
import useToggle from "../hooks/use_toggle";
import FavoriteStrain from "./favorite";

export const Card = ({ strain }) => {
	const [front, back] = useToggle(true);

	if (strain.type === "sativa") {
		return (
			<div className="card-container sativa" onClick={back}>
				<span>
					<FavoriteStrain id={strain.id} />
				</span>
				<div className="strain-card">
					{front ? (
						<div>
							<br></br>
							<h3>{strain.strain.toUpperCase()}</h3>
							<br></br>
							<h6>{strain.type.toUpperCase()}</h6>
							<br></br>
							<i>{strain.effects}</i>
							<br></br>
							{/* <p>{strain.id}</p> */}
						</div>
					) : (
						<div>
							
							<br></br>
							<h3>{strain.strain.toUpperCase()}</h3>
							<br></br>
							
							<h6>{strain.flavor}</h6>
							<br></br>
							<p>{strain.description}</p>
						</div>
					)}
				</div>
			</div>
		);
	} else if (strain.type === "hybrid") {
		return (
			<div className="card-container hybrid" onClick={back}>
				<span>
					<FavoriteStrain id={strain.id} />
				</span>

				<div className="strain-card">
					{front ? (
						<div>
							<br></br>
							<h3>{strain.strain.toUpperCase()}</h3>
							<br></br>
							<h6>{strain.type.toUpperCase()}</h6>
							<br></br>
							<i>{strain.effects}</i>
							<br></br>
							{/* <p>{strain.id}</p> */}
						</div>
					) : (
						<div>
							<br></br>
							<h3>{strain.strain.toUpperCase()}</h3>
							<br></br>
							<h6>{strain.flavor}</h6>
							<br></br>
							<p>{strain.description}</p>
						</div>
					)}
				</div>
			</div>
		);
	} else {
		return (
			<div className="card-container indica" onClick={back}>
				<span>
					<FavoriteStrain id={strain.id} />
				</span>
				<div className="strain-card ">
					{front ? (
						<div>
							<br></br>
							<h3>{strain.strain.toUpperCase()}</h3>
							<br></br>
							<h6>{strain.type.toUpperCase()}</h6>
							<br></br>
							<i>{strain.effects}</i>
							<br></br>
							{/* <p>{strain.id}</p> */}
						</div>
					) : (
						<div>
							<br></br>
							<h3>{strain.strain.toUpperCase()}</h3>
							<br></br>
							<h6>{strain.flavor}</h6>
							<br></br>
							<p>{strain.description}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
};

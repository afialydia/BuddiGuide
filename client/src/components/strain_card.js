import React from "react";
import "../page/homepage.styles.css";
import useToggle from "../hooks/use_toggle";
import { Link } from "react-router-dom";

export const Card = ({ strain }) => {
	const [front, back] = useToggle(true);


	if (strain.type === "sativa") {
		return (
			<div className="card-container sativa" onClick={back}>
				<div className="strain-card">
					{front ? (
						<div>
							<h3>{strain.strain.toUpperCase()}</h3>
							<h6>{strain.type.toUpperCase()}</h6>
							<i>{strain.effects}</i>
							<br></br>
							{/* <p>{strain.id}</p> */}
						</div>
					) : (
						<div>
							<h5>{strain.strain.toUpperCase()}</h5>
							<h6>{strain.flavor}</h6>
							<p>{strain.description}</p>
						</div>
					)}
				</div>
			</div>
		);
	} else if (strain.type === "hybrid") {
		return (
			<div className="card-container hybrid" onClick={back}>
				<div className="strain-card">
					{front ? (
						<div>
							<h3>{strain.strain.toUpperCase()}</h3>
							<h6>{strain.type.toUpperCase()}</h6>
							<i>{strain.effects}</i>
							<br></br>
							{/* <p>{strain.id}</p> */}
						</div>
					) : (
						<div>
							<h5>{strain.strain.toUpperCase()}</h5>

							<h6>{strain.flavor}</h6>
							<p>{strain.description}</p>
						</div>
					)}
				</div>
			</div>
		);
	} else {
		return (
			<div className="card-container indica" onClick={back}>
				<div className="strain-card ">
					{front ? (
						<div>
							<h3>{strain.strain.toUpperCase()}</h3>
							<h6>{strain.type.toUpperCase()}</h6>
							<i>{strain.effects}</i>
							<br></br>
							{/* <p>{strain.id}</p> */}
						</div>
					) : (
						<div>
							<h5>{strain.strain.toUpperCase()}</h5>
							<h6>{strain.flavor}</h6>
							<p>{strain.description}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
};

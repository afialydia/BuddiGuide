import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { getUser } from "../../redux/user/user.selectors";
import useToggle from "../../hooks/useToggle";
import FavoriteStrain from "../favoriteComponents/addFave.icon";

import "../../page/home.styles.css";

const StrainContentsCard = ({ strain, user }) => {
	const [front, back] = useToggle(true);

	const { id, strain: name, type, effects, flavor, description } = strain;
	return (
		<div className={`card-container ${type}`}>
			<span>
				{Object.prototype.hasOwnProperty.call(user, "id") ? (
					<FavoriteStrain id={id} />
				) : (
					""
				)}
			</span>
			<div className="strain-card" onClick={back}>
				{front ? (
					<div>
						<br />
						<h3>{name.toUpperCase()}</h3>
						<br />
						<h6>{type.toUpperCase()}</h6>
						<br />
						<i>{effects}</i>
						<br />
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

const mapStateToProps = createStructuredSelector({
	user: getUser,
});

export default connect(mapStateToProps)(StrainContentsCard);

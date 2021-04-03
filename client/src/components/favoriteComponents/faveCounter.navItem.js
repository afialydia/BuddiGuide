import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchFaves } from "../../redux/favorites/favorites.actions";
import { getUserId } from "../../redux/user/user.selectors";
import { selectFaveAmount } from "../../redux/favorites/favorites.selectors";
import buddi from "../../assets/buddi.svg";
import "../../page/home.styles.css";

const FaveCounter = ({ user_id, getAllFavorites, faves }) => {
	useEffect(() => {
		getAllFavorites(user_id);
	}, []);

	return (
		<div className="menu">
			<span className="fave-number">{faves}</span>
			<img src={buddi} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	faves: selectFaveAmount,
	user_id: getUserId,
});

const mapDispatchToProps = (dispatch) => ({
	getAllFavorites: (id) => dispatch(fetchFaves(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FaveCounter);

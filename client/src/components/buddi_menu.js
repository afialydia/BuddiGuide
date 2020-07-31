import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Badge } from 'reactstrap';

import { fetchFaves } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";

import { selectFaveAmount } from "../redux/favorites/favorites.selectors";

import buddi from "../assets/buddi.svg";
import "../page/homepage.styles.css";

const Buddi_Menu = ({ user_id, getAllFavorites, faves }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Buddi_Menu);

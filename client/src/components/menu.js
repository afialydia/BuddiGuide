import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { resetState } from "../redux/user/user.actions";

import { getUser } from "../redux/user/user.selectors";

import Login_Modal from "../page/login.modal";
import "../page/home.styles.css";
import "../page/favorites.styles.css";

const Menu = ({ logOutUser, user }) => {

	return (
		<>
			<h5>
				{user.hasOwnProperty("id") ? (
					<div onClick={logOutUser}>Log Out</div>
				) : (
					<Login_Modal />
				)}
			</h5>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	user: getUser,
});

const mapDispatchToProps = (dispatch) => ({
	logOutUser: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { resetState } from "../../redux/user/user.actions";

import { getUser } from "../../redux/user/user.selectors";

import AuthModal from "../../page/auth.modal";
import "../../page/home.styles.css";
import "../../page/favorites.styles.css";

const AuthItem = ({ logOutUser, user }) => {
	return (
		<h5>
			{Object.prototype.hasOwnProperty.call(user, "id") ? (
				<div onClick={logOutUser}>{"Log Out"}</div>
			) : (
				<AuthModal />
			)}
		</h5>
	);
};

const mapStateToProps = createStructuredSelector({
	user: getUser,
});

const mapDispatchToProps = (dispatch) => ({
	logOutUser: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthItem);

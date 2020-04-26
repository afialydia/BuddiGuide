import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { deleteFave, fetchFaves } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";

const RemoveFavorite = ({ fid, deleteFave, user_id},props) => {
	console.log(fid, user_id)
	return <i onClick={() => deleteFave({fid,user_id},props)} class="fas fa-times"></i>

};

const mapStateToProps = createStructuredSelector({
	user_id: getUserId,
});

const mapDispatchToProps = (dispatch) => ({
	deleteFave: (id) => dispatch(deleteFave(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFavorite);

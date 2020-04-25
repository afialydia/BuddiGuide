import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addFave } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";

const FavoriteStrain = ({ id, addFave, user_id }) => {
	return <i onClick={() => addFave({ id, user_id })} class="fas fa-heart"></i>;
};

const mapStateToProps = createStructuredSelector({
	user_id: getUserId,
});

const mapDispatchToProps = (dispatch) => ({
	addFave: (id) => dispatch(addFave(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteStrain);

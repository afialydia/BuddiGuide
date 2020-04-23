import React, { useState } from "react";
import { connect } from "react-redux";

import { addFave } from "../redux/favorites/favorites.actions";

const FavoriteStrain = ({ id, addFave }) => {
	return <i onClick={() => addFave({id, user_id:2})} class="fas fa-heart"></i>;
};

const mapDispatchToProps = (dispatch) => ({
	addFave: id => dispatch(addFave(id)),
});

export default connect(null, mapDispatchToProps)(FavoriteStrain);

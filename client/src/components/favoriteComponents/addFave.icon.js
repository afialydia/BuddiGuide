import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addFave } from "../../redux/favorites/favorites.actions";
import { getUserId } from "../../redux/user/user.selectors";

const AddFave = ({ id, addFave, user_id }) => {
	return <i onClick={() => addFave({ id, user_id })} className="fas fa-heart" />;
};

const mapStateToProps = createStructuredSelector({
	user_id: getUserId,
});

const mapDispatchToProps = (dispatch) => ({
	addFave: (id) => dispatch(addFave(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFave);

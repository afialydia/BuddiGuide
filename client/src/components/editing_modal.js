import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";


import { fetchFaves, editFave } from "../redux/favorites/favorites.actions";

import "../page/favorites.styles.css";

const EditingModal = ({ fave, user_id, editFave, toggle }, props) => {
	const [state, setState] = useState({
		have_tried: `${fave.have_tried}`,
		notes: `${fave.notes}`,
		personal_rating: `${fave.personal_rating}`,
		fid: `${fave.favorite_id}`,
		user_id: `${user_id}`,
		strain: `${fave.strain}`,
	});

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
		// console.log(state);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { have_tried, notes, personal_rating, fid, user_id, strain } = state;
		console.log(user_id);
		
		editFave(
			{ fid },
			{ have_tried, notes, personal_rating, fid, user_id, strain }
		)
		toggle();

	};

	return (
		<div className="edit-fave-container">
			<div className="edit-fave"><i
				onClick={async () => {
					await toggle();
				}}
				class="fas fa-times"
			/>

			<h2>{state.strain}</h2>
			{/* {console.log("state", state)} */}
			<Form className="form-container" onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="personal rating">Rating:</Label>
					<Input
						type="select"
						className="input"
						placeholder={`${fave.personal_rating}`}
						name="personal_rating"
						onChange={handleChange}
					>
						<option>{fave.personal_rating}</option>
						<option>Loved It</option>
						<option>Liked It</option>
						<option>Have Not Tried Yet</option>
						<option>Not a Fan</option>
						<option>Hated It</option>
					</Input>
				</FormGroup>

				<FormGroup>
					<Label for="notes">Notes:</Label>
					<Input
						type="textarea"
						name="notes"
						placeholder={`${fave.notes}`}
						className="input"
						onChange={handleChange}
					/>
				</FormGroup>

				<Button className="button">Submit</Button>
			</Form>
			</div></div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	editFave: ({ fid }, update) => dispatch(editFave({ fid }, update)),
	fetchFaves: ({ user_id }) => dispatch(fetchFaves(user_id)),
});
export default connect(null, mapDispatchToProps)(EditingModal);

import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { fetchFaves, editFave } from "../../redux/favorites/favorites.actions";
import "../../page/favorites.styles.css";

const EditFaveForm = ({ fave, user_id, editFave, toggle }, props) => {
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
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { have_tried, notes, personal_rating, fid, user_id, strain } = state;
		console.log(user_id);

		editFave(
			{ fid },
			{ have_tried, notes, personal_rating, fid, user_id, strain }
		);
		toggle();
	};

	return (
		<div>
			<span>
				<i
					onClick={async () => {
						await toggle();
					}}
					className="fas fa-times"
				/>
			</span>
			<div className="edit-fave">
				<h2>{state.strain.toUpperCase()}</h2>
				{/* {console.log("state", state)} */}
				<Form className="form-container" onSubmit={handleSubmit}>
					<FormGroup row>
						<Col lg={10}>
							<Label for="personal rating" sm={2}>
								Rating:
							</Label>
							<br />
							<Input
								size="lg"
								type="select"
								// children= "innerRef"
								className="fave-input input"
								placeholder={`${fave.personal_rating}`}
								name="personal_rating"
								onChange={handleChange}
							>
								<option>Status: {fave.personal_rating}</option>
								<option>Loved It</option>
								<option>Liked It</option>
								<option>Have Not Tried Yet</option>
								<option>Not a Fan</option>
								<option>Hated It</option>
							</Input>
						</Col>
					</FormGroup>

					<FormGroup row>
						<Col lg={10}>
							<Label for="notes" sm={2}>
								Notes:
							</Label>
							<br />
							<Input
								size="lg"
								type="textarea"
								name="notes"
								placeholder={`${fave.notes}`}
								className="fave-input textarea"
								onChange={handleChange}
							/>
						</Col>
					</FormGroup>

					<Button color="rgb(98, 46, 71, 0.8)" className="fave-button">Submit</Button>
				</Form>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	editFave: ({ fid }, update) => dispatch(editFave({ fid }, update)),
	fetchFaves: ({ user_id }) => dispatch(fetchFaves(user_id)),
});
export default connect(null, mapDispatchToProps)(EditFaveForm);

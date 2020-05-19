import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { selectUser } from "../redux/user/user.selectors";
import { loginUser } from "../redux/user/user.actions";

const LogIn = ({ loginUser, toggle }) => {
	const [state, setState] = useState({
		username: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		loginUser(state);
		await toggle();
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setState({...state, [name]: value });
	};

	return (
		<div>
			{/* <span>
				<i
					onClick={async () => {
						await toggle();
					}}
					class="fas fa-times"
				/>
			</span> */}
			<h3>Welcome!</h3>

			<Form className="form-container" onSubmit={handleSubmit}>
				<div>
					<FormGroup row>
						<Col lg={10}>
							<Label for="username" sm={2}>
								Username:
							</Label>
							<br></br>
							<Input
								size="lg"
								type="text"
								name="username"
								className="fave-input"
								placeholder={`username`}
								onChange={handleChange}
								required
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col lg={10}>
							<Label for="password" sm={2}>
								Password:
							</Label>
							<br></br>
							<Input
								size="lg"
								type="password"
								name="password"
								placeholder={`password`}
								className="fave-input"
								onChange={handleChange}
								required
							/>
						</Col>
					</FormGroup>
				
				</div>

				<Button color="rgb(98, 46, 71, 0.8)" className="fave-button">
					Submit
				</Button>
			</Form>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	user: selectUser,
});

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

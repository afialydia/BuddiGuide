import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { selectUser } from "../redux/user/user.selectors";
import { loginUser } from "../redux/user/user.actions";

import "./homepage.styles.css";
import "./favorites.styles.css";

const LogIn = ({ loginUser, close }) => {
	const [state, setState] = useState({
		username: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		loginUser(state);
		await close();
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setState({ ...state, [name]: value });
	};

	return (
		<div className="auth-container">
	
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
			<br></br>
			
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	user: selectUser,
});

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

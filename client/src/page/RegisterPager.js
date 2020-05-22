import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Form, FormGroup, Input, Label, Button, Col, Row } from "reactstrap";

import { getMessage, getErrors } from "../redux/user/user.selectors";
import { registerUser, resetState } from "../redux/user/user.actions";

import "./homepage.styles.css";
import "./favorites.styles.css";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Register = ({ registerUser, close, message, error, resetState }) => {
	const [state, setState] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});

	const [status, setStatus] = useState("");
	const [passwordMatch, setPasswordMatch] = useState("");
	const [nameTaken, setNameTaken] = useState("");

	const handleSubmit = async (e) => {
		const { username, password, confirmPassword } = state;
		e.preventDefault();
		if (password !== confirmPassword) {
			setPasswordMatch("Please check that your passwords match.");
		} else {
			console.log(message);
			setPasswordMatch("");
			await registerUser({ username, password });
			await delay(3000);
			console.log(message);

			if (message === null) {
				await delay(2000);
				setNameTaken(`${error.error}`);
				await delay(2000);
				setStatus("");
				setPasswordMatch("");
				setNameTaken("");
				resetState();
			} else {
				setNameTaken("");
				setStatus(`${message}`);
				await delay(3000);
				close();
			}
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setState({ ...state, [name]: value });
	};

	return (
		<div className="auth-container">
			<div className="status">
				<i>{status}</i>
			</div>
			<Form className="form-container" onSubmit={handleSubmit}>
				<div>
					<FormGroup className="group" row>
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
							<Row className="status">
								<i>{nameTaken}</i>
							</Row>
						</Col>
					</FormGroup>
					<FormGroup className="group" row>
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
					<FormGroup className="group" row>
						<Col lg={10}>
							<Label for="confirmPassword" lg={6}>
								Confirm Password:
							</Label>
							<br></br>
							<Input
								size="lg"
								type="password"
								name="confirmPassword"
								placeholder={`confirm password`}
								className="fave-input"
								onChange={handleChange}
								required
							/>

							<div className="status">
								<i>{passwordMatch}</i>
							</div>
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
	message: getMessage,
	error: getErrors,
});

const mapDispatchToProps = { registerUser, resetState };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

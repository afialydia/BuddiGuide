import React, { useState } from "react";
import { connect } from "react-redux";

import { Form, FormGroup, Input, Label, Button, Col, Row } from "reactstrap";

import { registerUser, resetState } from "../../redux/user/user.actions";

import "../../page/home.styles.css";
import "../../page/favorites.styles.css";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Register = ({ registerUser, resetState }) => {
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
			setPasswordMatch("");
			registerUser({ username, password })
				.then(async (response) => {
					setNameTaken("");
					setStatus(`${response.data.message}`);
				})
				.catch(async (err) => {
					return (
						setNameTaken(`${err.response.data.error}`),
						await delay(5000),
						setStatus(""),
						setNameTaken(""),
						setPasswordMatch(""),
						resetState()
					);
				});
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setState({ ...state, [name]: value });
	};

	return (
		<div className="auth-container">
			<Form className="form-container" onSubmit={handleSubmit}>
				<div>
					<FormGroup className="group" row>
						<Col lg={10}>
							<Label for="username" sm={2}>
								{"Username:"}
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
								{"Password:"}
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
								{"Confirm Password:"}
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
								<span>{status}</span>
							</div>
						</Col>
					</FormGroup>
				</div>

				<Button color="rgb(98, 46, 71, 0.8)" className="fave-button">
					{"Submit"}
				</Button>
			</Form>
			<br></br>
		</div>
	);
};

const mapDispatchToProps = { registerUser, resetState };

export default connect(null, mapDispatchToProps)(Register);

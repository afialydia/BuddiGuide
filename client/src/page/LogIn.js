import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "../components/form_input";
import { selectUser } from "../redux/user/user.selectors";
import {loginUser} from "../redux/user/user.actions";

class LogIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		console.log(this.state);
		console.log('props', this.props)

		 this.props.loginUser(this.state, this.props.history);	}
	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<h3>Welcome!</h3>

				<form className="form" onSubmit={this.handleSubmit}>
					<div>
						<FormInput
							name="username"
							type="text"
							handleChange={this.handleChange}
							value={this.state.username}
							label="username"
							required
						/>
						<FormInput
							name="password"
							type="password"
							value={this.state.password}
							handleChange={this.handleChange}
							label="password"
							required
						/>
					</div>
					<div>
						<button className="button" type="submit">
							Sign In
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	user: selectUser
});

const mapDispatchToProps = {loginUser}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

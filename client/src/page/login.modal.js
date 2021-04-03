import React, { useState } from "react";
import { Modal, ModalBody, TabContent, TabPane, NavLink } from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import classnames from "classnames";

import LogIn from "../components/login.form";
import Register from "../components/register.form";

import { fetchFave } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";
import { selectFave } from "../redux/favorites/favorites.selectors";

import "./home.styles.css";
import "./favorites.styles.css";

const Login_Modal = () => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const [activeTab, setActiveTab] = useState("1");

	const tabToggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<>
			<Modal
				isOpen={modal}
				size="sm"
				aria-labelledby="contained-modal-title-vcenter"
				centered={false}
				backdrop={true}
				fade={true}
				autoFocus={true}
				tabToggle={toggle}
				className="menu-modal"
				contentClassName="menu-content"
			>
				<ModalBody>
					<div tabs>
						<NavLink
							className={classnames({ active: activeTab === "1" })}
							onClick={() => {
								tabToggle("1");
							}}
						>
							<span>
								<i
									onClick={async () => {
										await toggle();
									}}
									class="fas fa-times"
								/>
							</span>
						</NavLink>

						<TabContent activeTab={activeTab}>
							<TabPane tabId="1">
								<LogIn toggle={toggle} />
								<NavLink
									className={classnames({ active: activeTab === "2" })}
									onClick={() => {
										tabToggle("2");
									}}
								>
									<div className="reg">
										<i>
											{"Don't have an account?"} <br />
											<h6>{"Sign Up"}</h6>
										</i>
									</div>
								</NavLink>
							</TabPane>

							<TabPane tabId="2">
								<Register toggle={toggle} />
								<NavLink
									className={classnames({ active: activeTab === "2" })}
									onClick={() => {
										tabToggle("1");
									}}
								>
									<div className="reg">
										<i>
											{"Have an account?"}
											<br />
											<h6> {"Login"}</h6>
										</i>
									</div>
								</NavLink>
							</TabPane>
						</TabContent>
					</div>
				</ModalBody>
			</Modal>
			<span
				onClick={() => {
					toggle();
				}}
			>
				{"Login"}
			</span>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	user_id: getUserId,
	fave: selectFave,
});

const mapDispatchToProps = (dispatch) => ({
	fetchFave: (id) => dispatch(fetchFave(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login_Modal);

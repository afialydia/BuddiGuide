import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchFave } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";
import { selectFave } from "../redux/favorites/favorites.selectors";
import "../page/homepage.styles.css";
import "../page/favorites.styles.css";
import LogIn from "../page/LogIn";
import classnames from "classnames";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
} from "reactstrap";
import Register from "../page/RegisterPager";

const Login_Modal = () => {
	const [modal, setModal] = useState(false);

	const close = () => setModal(!modal);

	const [activeTab, setActiveTab] = useState("1");

	const toggle = (tab) => {
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
				toggle={close}
				className="menu-modal"
				contentClassName="menu-content"
			>
				<ModalBody className="">
					<div tabs>
						<NavLink
							className={classnames({ active: activeTab === "1" })}
							onClick={() => {
								toggle("1");
							}}
						>
							<span>
								<i
									onClick={async () => {
										await close();
									}}
									class="fas fa-times"
								/>
							</span>
							{/* <h3>Welcome Back!</h3> */}
						</NavLink>

						{/* <NavItem> */}

						{/* </NavItem> */}
						{/* </Nav> */}
						<TabContent activeTab={activeTab}>
							<TabPane tabId="1">
								<LogIn close={close} />
								<NavLink
									className={classnames({ active: activeTab === "2" })}
									onClick={() => {
										toggle("2");
									}}
								>
									<div className="reg">
										<i>
											Don't have an account? <br></br>
											<h6>Sign Up</h6>
										</i>
									</div>
								</NavLink>
							</TabPane>

							<TabPane tabId="2">
								<Register close={close} />
								<NavLink
									className={classnames({ active: activeTab === "2" })}
									onClick={() => {
										toggle("1");
									}}
								>
									<div className="reg">
										<i>
											Have an account?<br></br>
											<h6>Log In</h6>
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
					close();
				}}
			>
				Login
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

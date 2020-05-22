import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { logOutUser } from "../redux/user/user.actions";
import { fetchFave } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";
import { selectFave } from "../redux/favorites/favorites.selectors";

import Login_Modal from "./login_modal";
import "../page/homepage.styles.css";
import "../page/favorites.styles.css";

const Menu = ({ logOutUser }) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			<Modal
				isOpen={modal}
				size="sm"
				aria-labelledby="contained-modal-title-vcenter"
				centered={false}
				backdrop={false}
				fade={true}
				autoFocus={true}
				toggle={toggle}
				className="menu-modal"
				contentClassName="menu-content"
			>
				<ModalBody className="">
					<div className="">
						<span>
							<i
								onClick={async () => {
									await toggle();
								}}
								class="fas fa-times"
							/>
						</span>
						{/* <Link className="link" to="/login"> */}
						<h4>
							<Login_Modal />
						</h4>{" "}
						{/* </Link> */}
						
						<h4>About</h4>
						{/* <Link className="link" to="/" onClick={logOutUser()}>
							<h4>Sign Out</h4>{" "}
						</Link> */}
					</div>
				</ModalBody>
			</Modal>
			<span
				onClick={() => {
					toggle();
				}}
			>
				<h4>
					<i class="fas fa-bars"></i>
				</h4>
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
	// logOutUser: () => dispatch(logOutUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

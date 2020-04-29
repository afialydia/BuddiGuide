import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchFave } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";
import { selectFave } from "../redux/favorites/favorites.selectors";
import "../page/homepage.styles.css";
import "../page/favorites.styles.css";

const Menu = () => {
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
						<Link className="link" to="/login">
							<h4>Login</h4>
						</Link>
						<Link className="link" to="/register">
							<h4>Sign Up</h4>{" "}
						</Link>
						<h4>About</h4>
					</div>
				</ModalBody>
			</Modal>
			<span
				onClick={() => {
					toggle();
				}}
			>
				<h4>MENU</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

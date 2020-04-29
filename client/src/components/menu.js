import React, { useState, useEffect } from "react";
import { Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchFave } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";
import { selectFave } from "../redux/favorites/favorites.selectors";
import EditingModal from "./editing_modal";
import '../page/homepage.styles.css'

const Menu = () => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			<Modal
				isOpen={modal}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				fade={true}
				autoFocus={true}
				toggle={toggle}
				contentClassName="insta"
			>
				<ModalBody className="modal">
					<div className="menu-modal">
						<div></div><i
							onClick={async () => {
								await toggle();
							}}
							class="fas fa-times"
						/>
                        
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

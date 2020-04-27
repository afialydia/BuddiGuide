import React, { useState, useEffect } from "react";
import { Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchFave } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";
import { selectFave } from "../redux/favorites/favorites.selectors";
import EditingModal from "./editing_modal";
import { deflate } from "zlib";

const EditFavorite = ({ fid, fetchFave, user_id, fave }, props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	const delay = ms => new Promise(res => setTimeout(res, ms));

	const orderedTog = async ({ fid, user_id }) => {
		fetchFave({ fid, user_id });
		await delay(500);
		toggle();
	};

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
					<EditingModal fave={fave[0]} user_id={user_id} toggle={toggle} />{" "}
				</ModalBody>
			</Modal>
			<i
				onClick={ () => {
					orderedTog({ fid, user_id })
					// fetchFave({ fid, user_id });
					// await toggle();
				}}
				class="fas fa-pencil-alt"
			></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditFavorite);

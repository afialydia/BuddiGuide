import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Header from "../components/header";
import { FaveContainer } from "../components/favoriteComponents/fave.container"

import { selectAllFaves } from "../redux/favorites/favorites.selectors";
import { fetchFaves } from "../redux/favorites/favorites.actions";
import { getUserId } from "../redux/user/user.selectors";


import "./home.styles.css";

const FavoritesPage = ({ strains, getAllFavorites, user_id }) => {
	const [searchField, setSearchField] = useState("");

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};
	useEffect(() => {
		getAllFavorites(user_id);
	}, []);

	let allStrains = strains;

	const filteredStrains = allStrains.filter((strain) =>
		strain.strain.toLowerCase().includes(searchField.toLowerCase())
	);

	return (
		<div className="strain-home">
			<Header handleChange={handleChange} />

			<FaveContainer strains={filteredStrains} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	strains: selectAllFaves,
	user_id: getUserId,
});

const mapDispatchToProps = (dispatch) => ({
	getAllFavorites: (id) => dispatch(fetchFaves(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

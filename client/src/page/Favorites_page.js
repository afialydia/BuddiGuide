import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectAllFaves } from "../redux/favorites/favorites.selectors";
import { SearchBar } from "../components/search_bar";
import { getUserId } from "../redux/user/user.selectors";
import "./homepage.styles.css";
import Buddi_Menu from "../components/buddi_menu";
import { fetchFaves } from "../redux/favorites/favorites.actions";
import { FavoritesContainer } from "../components/favorite_container";

const FavoritesPage = ({ strains, getAllFavorites,user_id }) => {
	const [searchField, setSearchField] = useState("");
	const [strainType, setStrainType] = useState("");

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};
	useEffect(() => {
		getAllFavorites(user_id);
	}, []);

	let allStrains = strains;
	// console.log(allStrains);
	// console.log(searchField);
	// let strainSort = (strainType)=> allStrains.filter((strain) => strain.type === strainType);

	// const sortedStrains = (allStrains) => {
	// 	 allStrains = strainSort("sativa")
	// 	 return console.log(allStrains);
	// };

	const filteredStrains = allStrains.filter((strain) =>
		strain.strain.toLowerCase().includes(searchField.toLowerCase())
	);

	// console.log(filteredStrains);
	return (
		<div className="strain-home">
			<div className="header-container">
				<Buddi_Menu />{" "}
				<div className="search-container">
					<h3>Hey There, Buddi Guide</h3>
					<SearchBar
						placeholder="Search Strains By Name..."
						handleChange={handleChange}
					/>
				</div>
			</div>
			<FavoritesContainer strains={filteredStrains} />
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

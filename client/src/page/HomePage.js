import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getStrains } from "../redux/strains/strain.selectors";
import { getUserId } from "../redux/user/user.selectors";
import { StrainContainer } from "../components/strain_container";
import { getAllStrains } from "../redux/strains/strain.actions";

import "./homepage.styles.css";

import { Header } from "../components/header";

const HomePage = ({ strains, getAllStrains, user_id }) => {
	const [searchField, setSearchField] = useState("");

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};
	useEffect(() => {
		getAllStrains();
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
			<Header handleChange={handleChange} user_id={user_id} />
			<StrainContainer strains={filteredStrains} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	strains: getStrains,
	user_id: getUserId,
});

const mapDispatchToProps = (dispatch) => ({
	getAllStrains: () => dispatch(getAllStrains()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

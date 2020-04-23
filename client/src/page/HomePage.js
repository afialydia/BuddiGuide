import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getStrains } from "../redux/strains/strain.selectors";
import { SearchBar } from "../components/search_bar";
import { StrainContainer } from "../components/strain_container";
import { getAllStrains } from "../redux/strains/strain.actions";
import buddi from '../assets/buddi.svg'
import "./homepage.styles.css";

const HomePage = ({ strains, getAllStrains }) => {
	const [searchField, setSearchField] = useState("");
	const [strainType, setStrainType] = useState('');

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};
	useEffect(() => {
		getAllStrains();
	}, []);

	let allStrains = strains;
	// console.log(allStrains);
	console.log(searchField);
	// let strainSort = (strainType)=> allStrains.filter((strain) => strain.type === strainType);

	// const sortedStrains = (allStrains) => {
	// 	 allStrains = strainSort("sativa")
	// 	 return console.log(allStrains);
	// };

	const filteredStrains = allStrains.filter((strain) =>
		strain.strain.toLowerCase().includes(searchField.toLowerCase())
	);

	console.log(filteredStrains);
	return (
		<div className="strain-home">
			<div className="search-container">
				<img src={buddi}/>
				<h2>Hey There, Buddi Guide</h2>
				<SearchBar placeholder="Search Strains By Name..." handleChange={handleChange} />
			</div>
			<StrainContainer strains={filteredStrains} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	strains: getStrains,
});

const mapDispatchToProps = (dispatch) => ({
	getAllStrains: () => dispatch(getAllStrains()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

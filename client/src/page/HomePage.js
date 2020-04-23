import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getStrains } from "../redux/strains/strain.selectors";
import { SearchBar } from "../components/search_bar";
import { StrainContainer } from "../components/strain_container";
import { getAllStrains } from "../redux/strains/strain.actions";
import './homepage.styles.css'


const HomePage = ({ strains, getAllStrains }) => {
	const [searchField, setSearchField] = useState("");
	const [results, setResults] = useState([]);

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};
	useEffect(() => {
		getAllStrains();
    }, []);
    
    let allStrains = strains
	// console.log(allStrains);
	console.log(searchField)
	
	const filteredStrains = strains.filter(strain =>
		strain.strain.toLowerCase().includes(searchField.toLowerCase())
	);
  
	console.log(filteredStrains);
	return (
		<div className="strain-home">
			<SearchBar placeholder="Enter a effect" handleChange={handleChange} />
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

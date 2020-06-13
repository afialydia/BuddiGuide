import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Fuse from "fuse.js";

import { getStrains } from "../redux/strains/strain.selectors";
import { getUserId } from "../redux/user/user.selectors";
import { StrainContainer } from "../components/strain_container";
import { getAllStrains } from "../redux/strains/strain.actions";

import "./homepage.styles.css";

import { Header } from "../components/header";
import Loader from "../components/loader";

const HomePage = ({ strains, getAllStrains, user_id }) => {
	const [searchField, setSearchField] = useState("");

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};
	useEffect(() => {
		getAllStrains();
	}, []);

	let allStrains = strains;

	const options = {
		isCaseSensitive: false,
		// includeScore: false,
		shouldSort: true,
		// includeMatches: false,
		findAllMatches: true,
		minMatchCharLength: 4,
		location: 0,
		threshold: 0.6,
		// distance: 100,
		// useExtendedSearch: false,
		keys: ["strain", "type", "effects", "flavor"],
	};

	const fuse = new Fuse(allStrains, options);

	if (searchField === "") {
		return (
			<div className="strain-home">
				<Header handleChange={handleChange} user_id={user_id} />
				<StrainContainer allStrains={allStrains} />
			</div>
		);
	} else {
		let filteredStrains = fuse.search(searchField);

		return (
			<div className="strain-home">
				<Header handleChange={handleChange} user_id={user_id} />
				<Loader />
				<StrainContainer filteredStrains={filteredStrains} />
			</div>
		);
	}
};

const mapStateToProps = createStructuredSelector({
	strains: getStrains,
	user_id: getUserId,
});

const mapDispatchToProps = (dispatch) => ({
	getAllStrains: () => dispatch(getAllStrains()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

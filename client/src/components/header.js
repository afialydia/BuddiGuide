import React from "react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { getUser } from "../redux/user/user.selectors";

import Menu from "./authComponents/auth.navItem";
import FaveCounter from "./favoriteComponents/faveCounter.navItem";
import { SearchBar } from "./searchBar";
import About from "./about.modal";

import "../page/home.styles.css";

const Header = ({ handleChange, user }) => {
	return (
		<div className="header-container">
			<div className="header-nav">
				<div className="fave-nav">
					<Link to="/favorites">
						<FaveCounter />
					</Link>
				</div>
				<div className="search-container">
					<span>
						<Link className="noline" to="/">
							<h5 className="link">{"BuddiGuide"}</h5>
						</Link>
					</span>

					<span>
						<h5>
							<About />
						</h5>
					</span>

					<span>
						<SearchBar
							placeholder={"Search Strains By Name, Type, Flavor, or Effect..."}
							handleChange={handleChange}
						/>
					</span>
				</div>
				<div className="spacer">
					<Menu />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	user: getUser,
});

export default connect(mapStateToProps)(Header);

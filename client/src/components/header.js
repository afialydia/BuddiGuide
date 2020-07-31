import React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";
import "../page/homepage.styles.css";
import Buddi_Menu from "./buddi_menu";
import { SearchBar } from "./search_bar";
import { Container, Row, Button, Col } from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getUser } from "../redux/user/user.selectors";
import Loader from "./loader";

const Header = ({ handleChange, user }) => {
	return (
		<div className="header-container">
			<div className="header-nav">
				<div className="fave-nav">
					<Link to="/favorites">
						<Buddi_Menu />
					</Link>
					{/* <Loader /> */}
				</div>
				<div className="search-container"><span>
					<Link className="link" to="/">
						{user.username ? <h3 className='username'>{user.username}'s BuddiGuide </h3> : <h3>Hey There, Buddi Guide</h3> }
						{/* <h3>hi</h3> */}
					</Link></span><span>
					<SearchBar
						placeholder={"Search Strains By Name, Type, Flavor, or Effect..."}
						handleChange={handleChange}
					/></span>
					<span><h3 className="FAQ">FAQ</h3></span>

				</div>
				<div className="spacer">
					<Menu />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	user: getUser
});

export default connect(mapStateToProps)(Header)
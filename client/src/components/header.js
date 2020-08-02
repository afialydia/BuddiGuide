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
				<div className="search-container">
					<span>
						<Link className="noline" to="/">
						{/* {user.username ? <h5 className='link'>{user.username}'s BuddiGuide </h5> :  */}
						<h5 className="link">BuddiGuide</h5>
						
						</Link>
					</span>

					<span>
						<h5>
							<a className="link" href="">FAQ</a>
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
	user: getUser
});

export default connect(mapStateToProps)(Header)
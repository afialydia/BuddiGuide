import React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";
import "../page/homepage.styles.css";
import Buddi_Menu from "./buddi_menu";
import { SearchBar } from "./search_bar";
import { Container, Row, Button, Col } from "reactstrap";
import Loader from "./loader";

export const Header = ({ handleChange }) => {
	return (
		<div className="header-container">
			<div className="splash"></div>{" "}
			<div className="header-nav">
				<div>
					<Link to="/favorites">
						<Buddi_Menu />
					</Link>
								<Loader />

				</div>
				<div className="search-container">
					<Link className="link" to="/">
						<h3>Hey There, Buddi Guide</h3>
					</Link>
					<SearchBar
						placeholder={"Search Strains By Name, Type, Flavor, or Effect..."}
						handleChange={handleChange}
					/>
				</div>
				<div className="spacer">
					<Menu />
				</div>
			</div>
		</div>
	);
};

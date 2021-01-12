import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = props => {
	const handelClick = e => {
		props.history.push("/create/post");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand">Navbar</a>
				<form className="d-flex">
					<button className="btn btn-outline-success" onClick={handelClick} type="submit">
						Crear un post
					</button>
				</form>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	history: PropTypes.object
};

export default Navbar;

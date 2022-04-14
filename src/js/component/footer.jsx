import React from "react";
import PropTypes from "prop-types";
export const Footer = (props) => {
	return (
		<nav className="navbar  navbar-dark bg-dark text-center">
			<div className="container-fluid d-flex flex-justify-center">
				<p className="navbar-text text-center mx-auto">{props.text}</p>
			</div>
		</nav>
	);
};
Footer.propTypes = {
	text: PropTypes.string,
};

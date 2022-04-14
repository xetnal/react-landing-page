import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
	return (
		<div className="container jumbotron bg-light">
			<h1> {props.title}</h1>
			<p>{props.text}</p>
			<button type="button" className="btn btn-primary">
				{props.button}
			</button>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";
export const Card = (props) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text-center">{props.text}</p>
				<a href="#" className="btn btn-primary ms-5">
					{props.button}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string,
	img: PropTypes.string,
};

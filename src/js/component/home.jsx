import React from "react";

import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid cards">
				<div className="row d-flex justify-content-center">
					<Card className="col-md-12 col-sm-12" />
					<Card className="col-md-12 col-sm-12" />
					<Card className="col-md-12 col-sm-12" />
					<Card className="col-md-12 col-sm-12" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;

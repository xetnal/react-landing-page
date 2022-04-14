import React from "react";

import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar title="The Landing Page!" />
			<Jumbotron
				title="A Warm Welcome!"
				text="lorem picsum hola que tal como esta profe, ojala me apruebe esta landing page hecha en React. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dolor tellus. Suspendisse potenti. Integer venenatis volutpat nisi sit amet iaculis. Duis ac nisl in neque efficitur porta et ac elit. Sed vel erat tincidunt, finibus neque sed, congue sapien. Sed faucibus leo dictum tincidunt maximus. Sed et maximus quam, in euismod metus. Aliquam non mollis arcu. Fusce a lorem ac turpis porta consectetur."
				button="Go somewhere!"
			/>
			<div className="container-fluid cards">
				<div className="row d-flex justify-content-center">
					<Card
						className="col-md-12 col-sm-12"
						img="https://picsum.photos/200"
						title="title1"
						text="This is the first text"
						button="Go somewhere"
					/>
					<Card
						className="col-md-12 col-sm-12"
						img="https://picsum.photos/200"
						title="title2"
						text="This is the second text"
						button="Go somewhere"
					/>
					<Card
						className="col-md-12 col-sm-12"
						img="https://picsum.photos/200"
						title="title3"
						text="This is the third text"
						button="Go somewhere"
					/>
					<Card
						className="col-md-12 col-sm-12"
						img="https://picsum.photos/200"
						title="title4"
						text="This is the fourth text"
						button="Go somewhere"
					/>
				</div>
			</div>
			<Footer text="This is the footer, super great am I right?" />
		</>
	);
};

export default Home;

import React from "react";
import {Jumbotron} from "./jumbotron";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;

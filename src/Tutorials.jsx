import React from "react";
import "./style.css";
import CardList from "./CardList";
function Tutorials() {
	return (
		<div>
			<div className="row">
				<div className="column">
					<h1>Tutorials</h1>
				</div>
			</div>
			<CardList value="Tutorials" />
			<div className="row">
				<div className="column">
					<button className="seeMore">See All Tutorials</button>
				</div>
			</div>
		</div>
	);
}
export default Tutorials;

import React from "react";
import "./style.css";
import CardList from "./CardList";
import { faker } from "@faker-js/faker";
function Articles(props) {
	return (
		<div>
			<div className="row">
		
				<button onClick={props.handleClick}> Sign Out
</button>			
			</div>
			<div className="row">
				<img className="coverImage" src={faker.image.city()} alt="random"></img>
			</div>
			<div className="row">
				<div className="column">
					<h1>Articles</h1>
				</div>
			</div>
			<CardList value="Articles" />
			<div className="row">
				<div className="column">
					<button className="seeMore">See All Articles</button>
				</div>
			</div>
		</div>
	);
}
export default Articles;

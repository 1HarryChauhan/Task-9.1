import React from "react";
import Card from "./ArticleCard.jsx";
import tutorialList from "./tutorialList.js";
import articleList from "./articleList";
import "./style.css";

const CardList = (props) => {
	if (props.value === "Articles") {
		return (
			<div className="row">
				{articleList.map((article) => (
					<Card
						image={article.image}
						key={article.key}
						article={article.article}
						description={article.description}
						grade={article.grade}
						name={article.name}
					/>
				))}
			</div>
		);
	} else if (props.value === "Tutorials") {
		return (
			<div className="row">
				{tutorialList.map((tutorial) => (
					<Card
						image={tutorial.image}
						key={tutorial.key}
						article={tutorial.tutorial}
						description={tutorial.description}
						grade={tutorial.grade}
						name={tutorial.name}
					/>
				))}
			</div>
		);
	}
};
export default CardList;

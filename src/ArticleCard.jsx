import React from "react";
import "./style.css";

const ArticleCard = (props) => {
	return (
		<div className="column">
			<img src={props.image} alt="article" />
			<h3>{props.article}</h3>
			<h4>Description</h4>
			<p>{props.description}</p>
			<div className="row">
				<div className="column small">
					<div className="row">
						<div className="column">
							<img
								class="star"
								src="https://www.svgrepo.com/show/13695/star.svg"
								alt="search"
							></img>
						</div>
						<div className="column">
							<p>{props.grade}</p>
						</div>
					</div>
				</div>
				<div className="column large">
					<p>{props.name}</p>
				</div>
			</div>
		</div>
	);
};
export default ArticleCard;

import React from "react";
import "./style.css";

function Footer() {
	return (
		<div>
			<div className="row footer">
				<div className="column">
					<ul>
						<li>
							<h1>Explore</h1>
						</li>
						<li>Home</li>
						<li>Questions</li>
						<li>Articles</li>
						<li>Tutorials</li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li>
							<h1>Support</h1>
						</li>
						<li>FAQs</li>
						<li>Help</li>
						<li>Contact Us</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div className="column">
					<ul>
						<li>
							<h1>Explore</h1>
						</li>
						<div className="row">
							<div className="column">
								<img
									className="socialIcon"
									src="https://www.svgrepo.com/show/157818/facebook.svg"
									alt="Social"
								></img>
							</div>
							<div className="column">
								<img
									className="socialIcon"
									src="https://www.svgrepo.com/show/97434/twitter.svg"
									alt="Social"
								></img>
							</div>
							<div className="column">
								<img
									className="socialIcon"
									src="https://www.svgrepo.com/show/111199/instagram.svg"
									alt="Social"
								></img>
							</div>
						</div>
					</ul>
				</div>
			</div>
			<div className="row footer">
				<div className="column">
					<h1>DEV@Deakin 2024</h1>
				</div>
			</div>
			<div className="row footer">
				<div className="column">
					<ul>Privacy Policy</ul>
				</div>
				<div className="column">
					<ul>Terms</ul>
				</div>
				<div className="column">
					<ul>Code of Conduct</ul>
				</div>
			</div>
		</div>
	);
}
export default Footer;

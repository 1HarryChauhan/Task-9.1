import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../style.css";

function NavigationBar() {
	return (
		<div>
			<div>
				<div className="row header">
					<div className="column medium">
						<Link className="link" to="/">
							<h2>DEV@Deakin</h2>
						</Link>
					</div>
					<div className="column large">
						<div className="searchBox">
							<div className="row">
								<img
									src="https://www.svgrepo.com/show/14071/search.svg"
									alt="search"
								></img>
								<p>Search</p>
							</div>
						</div>
					</div>
					<div className="column small">
						<h2>Post</h2>
					</div>
					<div className="column small">
						<Link className="link" to="/login">
							<h2>Login</h2>
						</Link>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
}
export default NavigationBar;

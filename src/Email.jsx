import React from "react";
import "./style.css";

function Email() {
	return (
		<div>
			<div className="subscribe-box">
				<form action="/sendemail" method="POST">
					<div className="row">
						<div className="column large">
							<div className="subscribe-text">SIGN UP FOR DAILY INSIDER</div>
						</div>
						<div className="column medium">
							<input
								className="input-email"
								type="email"
								class="form-control"
								name="email"
								placeholder="Email"
								required="required"
							/>
						</div>
						<div className="column small">
							<button className="button.email" type="submit">
								Subscribe
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
export default Email;

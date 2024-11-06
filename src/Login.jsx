import React, { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {
	signInWithGooglePopup,
	createUserDocFromAuth,
	signinAuthUserWithEmailAndPassword,
} from "./utils/firebase";

const Login = (props) => {
	const [error,setError] = useState("");
	const nv = useNavigate();
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		// eslint-disable-next-line
		const userDocRef = await createUserDocFromAuth(user);

		if(userDocRef.id!==null){
			props.auth = true;
			
			nv("../home",{relative:true});
		}
	};

	const [contact, setContact] = useState({
		email: "",
		password: "",
	});

	const { email, password } = contact;
	const handleChange = (event) => {
		const { name, value } = event.target;
		setContact((preValue) => {
			return {
				...preValue,
				[name]: value,
			};
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await signinAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(response);
			// function fn (){
			
			// } 
			nv("../home",{relative:true});
				// fn();
			 props.auth = (true);
		} catch (error) {
			console.log("error in login", error.message);
			setError(error);
		}
	};

	return (
		<div className="login-style">
			<div className="input-box">
				<label for="email">Email:</label>
				<Input
					name="email"
					type="email"
					placeholder="email"
					onChange={handleChange}
					value={contact.username}
				/>
			</div>
			<div className="input-box">
				<label for="password">Password:</label>
				<Input
					name="password"
					type="password"
					placeholder="password"
					onChange={handleChange}
					value={contact.password}
				/>
			</div>

			<div className="input-box">
				<button className="login" onClick={handleSubmit}>
					Log in
				</button>
			</div>

			<div className="input-box">
				<button className="login" onClick={logGoogleUser}>
					Log in with Google
				</button>
			</div>
			<div className="input-box">
				<p>{error.message}</p>
			</div>

			<Link className="signup-title" to="/signup">
				Sign up instead
			</Link>
		</div>
	);
};
export default Login;

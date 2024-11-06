import React, { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocFromAuth,
} from "./utils/firebase";
import bcrypt from "bcryptjs"

const salt = bcrypt.genSaltSync(10);

const Signup = (props) => {
	const nv= useNavigate();
	const  [error,setError] = useState("")
	const [contact, setContact] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = contact;

	console.log(contact);

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
		if (password !== confirmPassword) {
			alert("Passwords do no match");
			return;
		}
		const hashedPassword = bcrypt.hash(password,salt);
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				// (await hashedPassword).toString
				password
			);
			await createUserDocFromAuth(user, { displayName });
			nv("../login",{relative:true});
			alert("User created successfully")
		} catch (error) {
			console.log("error in creating user", error.message);
			setError(error);
		}
	};

	return (
		<div className="login-style">
			<h3 className="signup-title">Create a DEV@Deakin Account</h3>
			<div className="input-box">
				<label for="displayName">Display Name:</label>
				<Input
					name="displayName"
					type="text"
					placeholder="Display Name"
					onChange={handleChange}
					value={contact.displayName}
				/>
			</div>
			<div className="input-box">
				<label for="email">Email</label>
				<Input
					name="email"
					type="email"
					placeholder="email"
					onChange={handleChange}
					value={contact.email}
				/>
			</div>
			<div className="input-box">
				<label for="password">Password</label>
				<Input
					name="password"
					type="password"
					placeholder="password"
					onChange={handleChange}
					value={contact.password}
				/>
			</div>
			<div className="input-box">
				<label for="confirmPassword">Confirm Password</label>
				<Input
					name="confirmPassword"
					type="password"
					placeholder="Confirm password"
					onChange={handleChange}
					value={contact.confirmPassword}
				/>
			</div>

			<div className="input-box">
				<button className="login" onClick={handleSubmit}>
					Create
				</button>
			</div>

			<div className="input-box">
				<p>{error.message}</p>
			</div>

			<Link className="signup-title" to="/login">
				Login
			</Link>
		</div>
	);
};
export default Signup;

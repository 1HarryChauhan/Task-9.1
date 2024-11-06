import React, { useState } from "react";
import "./App.css";
import HomePage from "./routes/HomePage.jsx";
import AboutPage from "./routes/AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import NavFooter from "./routes/NavFooter";
import ConnectPage from "./routes/ConnectPage";
import Login from "./Login";
import Signup from "./Signup";

function App() {
	const [isAuthenticated, setisAuthenticated] = useState(false);

	// const Auth_Check_For_Routes = ({ isAuthenticated }) => {
	// 	return isAuthenticated ? (
	// 		<Navigate to="/home" replace />
	// 	) : (
	// 		<Navigate to="/" replace />
	// 	);
	// };
	return (
		<Routes>
			
			<Route path="/" element={<NavFooter />}>
				<Route path="home" element={<HomePage  />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="connect" element={<ConnectPage />} />
				<Route path="login" element={<Login auth={setisAuthenticated} />} />
				<Route path="signup" element={<Signup />} />
			</Route>
		</Routes>
	);
}

export default App;

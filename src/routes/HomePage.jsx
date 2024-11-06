import React from "react";
import Articles from "../Articles";
import Tutorials from "../Tutorials";
import Email from "../Email";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
// import React from "react";
import { auth } from '../utils/firebase';
// import { useNavigate } from "react-router-dom";

function HomePage(props) {
	// function Resed(){
	// 	const nav  = useNavigate();
	// 	nav("../login",{relative:true})
	// }
	const nav = useNavigate()

    const handleClick = () =>{
        signOut(auth).then(val=>{
            console.log(val,"val")
            nav('/')
        })
    }
	return ( <div>
		<Articles handleClick={handleClick} />
		<Tutorials />

		<Email />
	</div>
	);
}
export default HomePage;

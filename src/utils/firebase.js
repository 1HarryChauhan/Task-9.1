import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import bcrypt from "bcryptjs"

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyA7JAPUOKAf8AsSp0OZg_37isBhl2J32vc",
	authDomain: "deakin-web-app-feca1.firebaseapp.com",
	projectId: "deakin-web-app-feca1",
	storageBucket: "deakin-web-app-feca1.appspot.com",
	messagingSenderId: "1010374480008",
	appId: "1:1010374480008:web:167ba7fb2f4f33089ecf3d"
  };

// Initialize Firebase
// eslint-disable-next-line
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth(firebaseapp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const user = getAuth().currentUser;

export const createUserDocFromAuth = async (
	userAuth,
	addionalInformation = {}
) => {
	if (!userAuth.email) return;
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				
				createdAt,
				...addionalInformation,
			});
		} catch (error) {
			console.log("error in creating ", error.message);
		}
	}
	return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	// if(bcrypt.compare(password,userAuth.hashedPassword) == false) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
export const checkAuth = async () => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			return true;
		} else {
			return false;
		}
	});
};

import firebase from "firebase/app"
import "firebase/auth";

const config = firebase.initializeApp({
    apiKey: "AIzaSyBpRw50RS-RnWoHMYK9eFu-ahi27IHdQqY",
    authDomain: "authtutorial-c8da4.firebaseapp.com",
    projectId: "authtutorial-c8da4",
    storageBucket: "authtutorial-c8da4.appspot.com",
    messagingSenderId: "182712740706",
    appId: "1:182712740706:web:a11c4185d04537a6e9da3b",
    measurementId: "G-DP4B2CK9XL"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;
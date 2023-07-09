import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC97dH4Q2qjESaHIxlKE0oNz96jePWww0o",
  authDomain: "carefinder-d7742.firebaseapp.com",
  projectId: "carefinder-d7742",
  storageBucket: "carefinder-d7742.appspot.com",
  messagingSenderId: "326795821218",
  appId: "1:326795821218:web:18878d630056f4e81697fb",
  measurementId: "G-8MKCTWVG9J",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const facebookProvider = new FacebookAuthProvider();

export const twitterProvider = new TwitterAuthProvider();


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyAbFwywrR7VjLB6O2T0oFlrUcFDNAZi2rI",
    authDomain: "blackjack-project-49c6e.firebaseapp.com",
    databaseURL: "https://blackjack-project-49c6e-default-rtdb.firebaseio.com",
    projectId: "blackjack-project-49c6e",
    storageBucket: "blackjack-project-49c6e.appspot.com",
    messagingSenderId: "317685761641",
    appId: "1:317685761641:web:9d75e09d47ea4a20d284f8",
    measurementId: "G-0V9H2V954S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const database = getDatabase(app);
const auth = getAuth(app)
// const storage = firebase.storage();


  export {auth, database };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhuut1jACMhwKSPnfFRQ99OhLZ_wULM1o",
    authDomain: "study-net-client.firebaseapp.com",
    projectId: "study-net-client",
    storageBucket: "study-net-client.appspot.com",
    messagingSenderId: "1036962462694",
    appId: "1:1036962462694:web:e1f12f5cc927633aa87427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
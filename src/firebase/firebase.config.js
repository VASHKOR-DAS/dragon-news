// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl8iG3aGXYucwG0kYcTxWB1cKXfnrlvZs",
  authDomain: "dragon-news-n.firebaseapp.com",
  projectId: "dragon-news-n",
  storageBucket: "dragon-news-n.appspot.com",
  messagingSenderId: "709053042293",
  appId: "1:709053042293:web:5da21a2ca0632551f1723c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
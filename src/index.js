import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAZOQNBtzkQk5jDhueWyNyXPMhqJVHRL8",
  authDomain: "rodrigo-app-af5df.firebaseapp.com",
  projectId: "rodrigo-app-af5df",
  storageBucket: "rodrigo-app-af5df.appspot.com",
  messagingSenderId: "170619889",
  appId: "1:170619889:web:7723c0e83a37df9e76ca50"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


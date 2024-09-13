// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

import { getRealtimeDB } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDt4gwpfxUBj7fdrzYG1aV2Mn-hGLFjXSY",

  authDomain: "personalsite-quangthaictc.firebaseapp.com",

  projectId: "personalsite-quangthaictc",

  storageBucket: "personalsite-quangthaictc.appspot.com",

  messagingSenderId: "779628395651",

  appId: "1:779628395651:web:8209225afb10e6bdfa2fb6",

  measurementId: "G-DP1DY9G7FM"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);



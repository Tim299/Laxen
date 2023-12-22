import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCPuzMw-fA2M42pSMwRgq43xxlg2II0mvE",
    authDomain: "laxen-iy1431.firebaseapp.com",
    projectId: "laxen-iy1431",
    storageBucket: "laxen-iy1431.appspot.com",
    messagingSenderId: "672549840361",
    appId: "1:672549840361:web:bf24a4d171a2ace2a65778",
    measurementId: "G-K885THMQTB"
  };


  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
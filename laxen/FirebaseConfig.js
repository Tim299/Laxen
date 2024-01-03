import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


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
  initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  export const FIREBASE_DB = getFirestore(FIREBASE_APP);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
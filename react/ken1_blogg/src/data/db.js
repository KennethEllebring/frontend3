// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnuGZJNgxu4Lfyu_OtmFkSW89GbdtftnQ",
  authDomain: "ken1-test-database.firebaseapp.com",
  projectId: "ken1-test-database",
  storageBucket: "ken1-test-database.appspot.com",
  messagingSenderId: "426779944261",
  appId: "1:426779944261:web:5eb0cff64cf7c4968e4a2c",
  measurementId: "G-E1R4324EWZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

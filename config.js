import firebase from "firebase";
// require ("@firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4GUJ6XORUA1aFDU5aY6naogwRmvFcMro",
  authDomain: "pro-71-94843.firebaseapp.com",
  projectId: "pro-71-94843",
  storageBucket: "pro-71-94843.appspot.com",
  messagingSenderId: "1043202736061",
  appId: "1:1043202736061:web:a563e75db5d43cb50f1cd4"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore();
// WHT is difference between this type nd const type.
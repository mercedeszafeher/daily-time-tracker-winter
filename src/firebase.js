import firebase from "firebase";

// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
var firebaseConfig = {
  apiKey: "AIzaSyBp8pFyz0OptMf1I1b43ppOqU-hgFc64XI",
  authDomain: "myfirebaseproject-46ea2.firebaseapp.com",
  projectId: "myfirebaseproject-46ea2",
  storageBucket: "myfirebaseproject-46ea2.appspot.com",
  messagingSenderId: "52876465545",
  appId: "1:52876465545:web:bf609d659dc3d5c91c3d58"
};

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeoR880gSIUfDSsCabUSCAZHzGJ1RuDlE",
  authDomain: "image-gallery-app-d2b8a.firebaseapp.com",
  projectId: "image-gallery-app-d2b8a",
  storageBucket: "image-gallery-app-d2b8a.appspot.com",
  messagingSenderId: "910350298230",
  appId: "G-04XT66W3V2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); // Initialize Firebase Authentication
const storage = getStorage(); // Initialize Firebase Storage

export { auth, storage };

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword , onAuthStateChanged , signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzStalVF0H0ZMKcRH-SBaY4uHQLcMKanw",
    authDomain: "ali-khan-67595.firebaseapp.com",
    projectId: "ali-khan-67595",
    storageBucket: "ali-khan-67595.firebasestorage.app",
    messagingSenderId: "124732584960",
    appId: "1:124732584960:web:fbcae85ca4ad9e4860d4e5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{ auth , createUserWithEmailAndPassword , onAuthStateChanged , signInWithEmailAndPassword , signOut}
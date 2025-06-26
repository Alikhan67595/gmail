 import { auth, onAuthStateChanged  , signOut} from "./firebase.js";
 

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    const uid = user.uid;
    // ...
} 
else {
    // User is signed out
    // ...
    window.location.replace("./index.html")
  }
});



 let logOut = () =>{
     console.log("user is Logout")
    
     signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
 }

 let logoutBtn = document.getElementById("logout-btn")

 logoutBtn.addEventListener("click", logOut)


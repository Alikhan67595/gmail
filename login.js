import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "./firebase.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
        const uid = user.uid;
        window.location.replace('./main.html')
        // ...
    } else {
        // User is signed out
        console.log("User Don't Exist")

        // ...
    }
});









// Sign In Function

let signIn = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    signInWithEmailAndPassword(auth, email.value , password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("error", error)
        });
}


// Sign Up and Sign In Button

let signUp_btn = document.getElementById("logIn_btn")

signUp_btn.addEventListener("click", signIn)



// Show and Hide password Function

let showpass = document.getElementById("showpass")
let hidePassword = document.getElementById("password");
function showPassword() {
    if (hidePassword.type === "password") {
        hidePassword.type = "text";
        // console.log("show password")
        showpass.innerText = "Hide password"
    } else {
        hidePassword.type = "password";
        showpass.innerText = "Show password"
    }
}
let checkBox = document.getElementById("checkBox")
checkBox.addEventListener("click", showPassword)




// login Button


let loginBtnUpp = document.getElementById("loginBtnUp")

let loginUp = () => {
    window.location.replace("./index.html")
    console.log("sign Up")
}

loginBtnUpp.addEventListener("click", loginUp)
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


let functionCode ;






let validateEmail = () => {
  let email = document.getElementById("email").value;  
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (pattern.test(email)) {
          let chekMail = document.getElementById("chekMail");
    chekMail.innerText = "Correct E-Mail"
    chekMail.style.color = "green"
}
else {  
    let chekMail = document.getElementById("chekMail");
    chekMail.innerText = "invalid Mail"
    chekMail.style.color = "#494949"
    
  }  
}  






// Sign Up Function
let sign_Up = document.getElementById("email")
let password = document.getElementById("password")

let signUp = () => {
    createUserWithEmailAndPassword(auth, sign_Up.value, password.value)
        .then((res) => {
            // Signed up 
            const user = res.user;
            console.log("user", res.user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("error ", error.code)
            functionCode = error.code
            chekMail.innerText = functionCode
            chekMail.style.color = "red"
            // ..
        });
}

sign_Up.addEventListener("blur",validateEmail)

// Sign Up and Sign In Button

let signUp_btn = document.getElementById("signUp_btn")

signUp_btn.addEventListener("click", signUp)





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

let login_Btn = document.getElementById("loginBtn");

let loginSignUp = ()=> {
    window.location.replace("./login.html")
    console.log("login")
}
    login_Btn.addEventListener("click", loginSignUp);


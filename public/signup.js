let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let gender = document.getElementById("gender")
let phone = document.getElementById("phone")
let pass = document.getElementById("pass")
let cpass = document.getElementById("cpass")
let show = document.getElementById("show")
let show2 = document.getElementById("show2")
let hide = document.getElementById("hide")
let hide2 = document.getElementById("hide2")
let dp = document.getElementById("dp")

function sub_(ev) {
    ev.preventDefualt()
}



const firebaseConfig = {
    apiKey: "AIzaSyC4MVuS63Tsz6ITs51jK7BtGY6IYySRGL0",
    authDomain: "blog-836a9.firebaseapp.com",
    projectId: "blog-836a9",
    storageBucket: "blog-836a9.appspot.com",
    messagingSenderId: "638037087258",
    appId: "1:638037087258:web:eca0d40091e84fffa42da3",
    measurementId: "G-T1V53VSFPC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();


function private_() {
    if (pass.type == "password") {
        console.log("done");
        show.src = "../public/Images/hide.png"
        pass.type = "text"
    } else {
        show.src = "../public/Images/show.png"
        pass.type = "password"
    }
}
function private_2() {
    if (cpass.type == "password") {
        show2.src = "../public/Images/hide.png"
        cpass.type = "text"
    } else {
        show2.src = "../public/Images/show.png"
        cpass.type = "password"
    }
}

function sub() {
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)

        .then((userCredential) => {
            // Signed in 
            // var user = userCredential.user;
            // console.log(user);
            const user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: `${fname.value} ${lname.value}`,
                photoURL: `${dp.value}`,
                phoneNumber: `${phone.value}`
            }).then(() => {
                // Update successful
                window.location.href = 'signin.html'
                // console.log(phone.value);
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

function noOnly(ev){
    let key = ev.keyCode;
    // console.log(key);
        if (key < 48 || key > 57) {
            ev.preventDefault();
          }
}
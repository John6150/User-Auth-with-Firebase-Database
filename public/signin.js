let email = document.getElementById("email")
let pass = document.getElementById("pass")
let show = document.getElementById("show")
let chk
users = []

function sub(ev) {
    ev.preventDefault()
}
var provider = new firebase.auth.OAuthProvider('apple.com');
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
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();



function private_() {
    if (pass.type == "password") {
        show.src = "./Images/hide.png"
        pass.type = "text"
    } else {
        show.src = "./Images/show.png"
        pass.type = "password"
    }
}

function login() {
    // console.log("welcome");
    if (email.value == '' || pass.value == '') {
        alert("Sorry, complete the fields")
    } else {
        firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert("Signed In")
                window.location.href = "index.html"
                console.log(user)
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
}

function googleSingin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            console.log(result);
            // The signed-in user info.
            var user = result.user;
            // IdP data available in result.additionalUserInfo.profile.
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}
function appleSingin() {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            // You can also get the Apple OAuth Access and ID Tokens.
            var accessToken = credential.accessToken;
            var idToken = credential.idToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
        });
}
let name_ = document.getElementById("name")
let price = document.getElementById("price")
let qty = document.getElementById("qty")
let desc = document.getElementById("desc")
let proImg = document.getElementById("proImg")
let currentUser_ = document.getElementById("username")

function noOnly(ev) {
    let key = ev.keyCode;
    if (key < 47 || key > 57) {
        ev.preventDefault();
    }
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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        var uid = user.uid;
        console.log(user);
        // ...
        currentUser_.innerHTML = user.displayName

    } else {
        // User is signed out
        // ...
        console.log("No user");
        currentUser_.innerHTML = ""
        window.location.href = "signin.html"
    }
});

function addProduct(ev) {
    ev.preventDefault()
    if (name_.value == '' || price.value == '' || qty.value == '' || desc.value == '') {
        alert("Sorry, complete the fields")
    } else {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);


        // Initialize Cloud Firestore and get a reference to the service
        const db = firebase.firestore();
        // Add a new document in collection "cities"
        db.collection("Product").doc().set({
            ProductName: name_.value,
            ProductPrice: price.value,
            QuantityAvailable: qty.value,
            ProductDescription: desc.value
        })
            .then(() => {
                name_.value = ''
                price.value = ''
                qty.value = ''
                desc.value = ''
                alert("Product Successfully Added");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }


}

function signOut() {
    firebase.auth().signOut().then(() => {
        alert("Signout successful");
        window.location.href = "signin.html";
    }).catch((error) => {
        // An error happened.
    });
}

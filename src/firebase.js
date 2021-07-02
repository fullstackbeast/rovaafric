import firebase from "firebase";


let config = {
    apiKey: "AIzaSyDTqzGz-aCF6KSv_vJyBuv4C-B_nsOoq4U",
    authDomain: "rovaafric.firebaseapp.com",
    projectId: "rovaafric",
    storageBucket: "rovaafric.appspot.com",
    messagingSenderId: "259147659753",
    appId: "1:259147659753:web:fe9f10c1fd883111d03378"
};

firebase.initializeApp(config);

export default firebase;
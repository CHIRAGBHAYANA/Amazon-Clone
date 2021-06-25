// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBbPmyOpurHreyYcV_IkQc_ONV_MqVKjX4",
    authDomain: "clone-cabec.firebaseapp.com",
    projectId: "clone-cabec",
    storageBucket: "clone-cabec.appspot.com",
    messagingSenderId: "733182573800",
    appId: "1:733182573800:web:da6e5655543a8c1a171d5d",
    measurementId: "G-JRJ73KV7J7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db ,auth} ;
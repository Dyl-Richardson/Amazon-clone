import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlmamnL4B9Tn8SkPjDGpeyDvVyrE6beZs",
    authDomain: "amzn-clone-dylr.firebaseapp.com",
    projectId: "amzn-clone-dylr",
    storageBucket: "amzn-clone-dylr.appspot.com",
    messagingSenderId: "118550767973",
    appId: "1:118550767973:web:4db80e2904ac2ee2b3998c",
    measurementId: "G-G67JHF1X4W"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

export default db
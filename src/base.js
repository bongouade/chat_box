import Rebase from 're-base'
import firebase from "firebase/app";
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCK3NsfaawlX6L8PGvd-WrhEraC5k1VYGc",
    authDomain: "chatbox-react-861e1.firebaseapp.com",
    databaseURL: "https://chatbox-react-861e1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbox-react-861e1",
    storageBucket: "chatbox-react-861e1.appspot.com",
    messagingSenderId: "956953920328",
    appId: "1:956953920328:web:e2c849578a21ed5769a97d"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
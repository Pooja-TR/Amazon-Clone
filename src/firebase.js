import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArERP0Z7F-LjsTGTIUibphnUjXw5pym9w",
  authDomain: "clone-7b466.firebaseapp.com",
  databaseURL: "https://clone-7b466.firebaseio.com",
  projectId: "clone-7b466",
  storageBucket: "clone-7b466.appspot.com",
  messagingSenderId: "39383286866",
  appId: "1:39383286866:web:feb8aa086b28100f330b8b",
  measurementId: "G-CM6RYCPM81",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); //helps add signin stuff

export { db, auth };

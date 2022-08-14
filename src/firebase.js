import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9NNgTH6VdkEuxVSUBuTRvbrIEItmr_bs",
  authDomain: "magicmeet-fe363.firebaseapp.com",
  projectId: "magicmeet-fe363",
  storageBucket: "magicmeet-fe363.appspot.com",
  messagingSenderId: "602247757265",
  appId: "1:602247757265:web:4ed0854adab4392bf0f4f0",
  measurementId: "G-6LTJ0N8TNB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

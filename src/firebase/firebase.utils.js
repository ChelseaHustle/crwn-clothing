import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 

{
    apiKey: "AIzaSyCY-JyqIEHGEaAzdKHXE8WwloMylhGGT90",
    authDomain: "crwn-db-1a847.firebaseapp.com",
    projectId: "crwn-db-1a847",
    storageBucket: "crwn-db-1a847.appspot.com",
    messagingSenderId: "900370427186",
    appId: "1:900370427186:web:4720b78f90c93a9cd87b2b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
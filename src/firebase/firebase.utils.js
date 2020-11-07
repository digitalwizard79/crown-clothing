import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzduuMqf2BrflMNQ3kFI53-eTMzNEKSSo",
    authDomain: "crown-be.firebaseapp.com",
    databaseURL: "https://crown-be.firebaseio.com",
    projectId: "crown-be",
    storageBucket: "crown-be.appspot.com",
    messagingSenderId: "891942487242",
    appId: "1:891942487242:web:01562569b53eecc3506033"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
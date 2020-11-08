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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
//console.log("There's a userAuth", userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
//console.log("There's a userRef", userRef);
    const snapShot = await userRef.get();
//console.log("SnapShot", snapShot);
    if (!snapShot.exists) {
//console.log("There's not a snapshot", snapShot);
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('Error creating user', error.message);
        }        
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
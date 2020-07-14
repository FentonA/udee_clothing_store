import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBd6cOrT8Sc9NmOHBUhH0efrpWniVLhJPI",
    authDomain: "udee-db.firebaseapp.com",
    databaseURL: "https://udee-db.firebaseio.com",
    projectId: "udee-db",
    storageBucket: "udee-db.appspot.com",
    messagingSenderId: "454958965522",
    appId: "1:454958965522:web:125e2a0d54d838b3c209cb",
    measurementId: "G-SMW39T77SZ"
};

firebase.initializeApp(config);

export const creatUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            });
        } catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


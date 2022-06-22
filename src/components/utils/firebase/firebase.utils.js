import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFEG9Uqiz6B5tFMhfexHsdodgUDuEjZEk",
    authDomain: "crwn-clothing-db-39d50.firebaseapp.com",
    projectId: "crwn-clothing-db-39d50",
    storageBucket: "crwn-clothing-db-39d50.appspot.com",
    messagingSenderId: "955006434730",
    appId: "1:955006434730:web:d19f570be804b407143fd3"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePoopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGooglRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}
 
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {})=> {

    if(!userAuth) return;

    const userDocRef = doc(db, 'user', userAuth.uid );

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists() );


    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }
        catch(error) {
            console.log('error creating the user', error.message);   
        }
    }
    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password); 
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password); 
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth,callback);
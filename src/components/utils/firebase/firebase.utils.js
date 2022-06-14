import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFEG9Uqiz6B5tFMhfexHsdodgUDuEjZEk",
    authDomain: "crwn-clothing-db-39d50.firebaseapp.com",
    projectId: "crwn-clothing-db-39d50",
    storageBucket: "crwn-clothing-db-39d50.appspot.com",
    messagingSenderId: "955006434730",
    appId: "1:955006434730:web:d19f570be804b407143fd3"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePoopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
 
export const createUserDocumentFromAuth = async (userAuth)=> {
    const userDocRef = doc(db, 'uers', userAuth.uid );

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
                createdAt
            });
        }
        catch(error) {
            console.log('error creating the user', error.message);   
        }
    }
    return userDocRef;
}

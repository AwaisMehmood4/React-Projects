// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS7EoRLDYasaNf0DDWFiRuER_0UMho0bo",
  authDomain: "firmly-f63e1.firebaseapp.com",
  projectId: "firmly-f63e1",
  storageBucket: "firmly-f63e1.appspot.com",
  messagingSenderId: "705858607316",
  appId: "1:705858607316:web:26245ea4d4a65011b6c341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth(app);
export default app;

export const db = getFirestore();
 
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {})=> {

    if(!userAuth) return;

    const userDocRef = doc(db, 'user', userAuth.email );
    const uid = userAuth.uid;

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists() );


    if(!userSnapshot.exists()){
        const {displayName,surName, phoneNumber, jobTitle,companyName,martialStatus,dob,education,employementYear,currentEmployement,email} = userAuth;
        console.log(typeof('userdocs' + phoneNumber));
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                uid,
                displayName,
                surName,
                email,
                phoneNumber,
                jobTitle,
                companyName,
                martialStatus,
                dob,
                education,
                employementYear,
                currentEmployement, 
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
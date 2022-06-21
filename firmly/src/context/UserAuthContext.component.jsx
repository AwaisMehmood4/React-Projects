import { createContext, useContext, useEffect, useState } from "react";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged, sendPasswordResetEmail} from 'firebase/auth';
import { auth } from "../firebase/firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){

    const [user, setUser] = useState('');

    function signUp(email, password){

        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    function signIn(email, password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout() {
        return signOut(auth)
    }

    // function resetPass(email) {
    //     console.log(email);
    //     return sendPasswordResetEmail(auth,email);
    // }
    const resetPass = async (email) => {
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Password reset link sent!");
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[]);

    return <userAuthContext.Provider value={{user,signUp, signIn,logout, resetPass}}>{children}</userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext);
}
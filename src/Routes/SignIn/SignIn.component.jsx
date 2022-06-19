import { Fragment } from "react";
import { auth,signInWithGooglePoopup, createUserDocumentFromAuth, signInWithGooglRedirect } from "../../components/utils/firebase/firebase.utils";
import { useEffect } from "react";
import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../components/sign-up-form/Sign-up-form.component';


const SignIn = () => {

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);

    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // },[]);
    
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePoopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    


    return (
        <Fragment>
            <div>
            <h3>SignIn</h3>
                <button onClick={logGoogleUser}>Sign In With Google PoopUp</button>
                {
                    // <button onClick={signInWithGooglRedirect}>Sign In With Google Redirect</button>
                }

                <SignUpForm />
            </div>
        </Fragment>
    );
}

export default SignIn;
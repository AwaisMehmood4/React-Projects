import { Fragment } from "react";
import { signInWithGooglePoopup, createUserDocumentFromAuth } from "../../components/utils/firebase/firebase.utils";


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePoopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <Fragment>
            <div>
            <h3>SignIn</h3>
                <button onClick={logGoogleUser}>Sign In With Google PoopUp</button>
            </div>
        </Fragment>
    );
}

export default SignIn;
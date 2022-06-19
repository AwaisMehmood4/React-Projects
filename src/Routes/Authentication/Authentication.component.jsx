import { Fragment } from "react";
import './authentication.style.scss';
import SignUpForm from '../../components/sign-up-form/Sign-up-form.component';
import SignIn from "../../components/sign-in-form/Sign-in-form.component";

const Authentication = () => {

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);

    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // },[]);
    
    
    


    return (
        <Fragment>
            <div className="authentication-container">
                {
                    // <button onClick={signInWithGooglRedirect}>Sign In With Google Redirect</button>
                }
                <SignIn />
                <SignUpForm />
            </div>
        </Fragment>
    );
}

export default Authentication;
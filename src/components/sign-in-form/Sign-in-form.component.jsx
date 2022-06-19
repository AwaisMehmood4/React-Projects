import { useState } from "react";

import './sign-in-form.style.scss';

import Button from "../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePoopup } from "../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import { async } from "@firebase/util";

const defaultFormFields = {
    email: '',
    password: '',
}; 

 const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePoopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        

        try{
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            
            resetFormFields();
        }
        



        catch(err){
            switch(err.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(err);

            }

          
        }
    }

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <p>Sign In with your Email and Password</p>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
            <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            </form>    
        </div>

    );
}




export default SignIn;
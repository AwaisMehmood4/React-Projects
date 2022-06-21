import React, { useState } from 'react';
import'./SignUp.style.css';
import {Link, useNavigate} from 'react-router-dom';
import {useUserAuth} from  '../../context/UserAuthContext.component';
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../firebase/firebase';
import { Alert } from 'react-bootstrap';
import Header from '../header/Header';

const defaultFormFields = {
    displayName:'',
    surName:'',
    password: '',
    email:'',
    phoneNumber: Number,
    jobTitle:'',
    companyName:'',
    martialStatus:'',
    dob:'',
    education:'',
    employementYear:Number,
    currentEmployement:Number,

}; 



function SignUp() {

    // const {signUp} = useUserAuth();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        displayName,
        surName,
        password,
        email,
        phoneNumber,
        jobTitle,
        companyName,
        martialStatus,
        dob,
        education,
        employementYear,
        currentEmployement
         } = formFields;
         console.log('without'+ phoneNumber);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError("");
    //     try{
    //         const user = await signUp(email,password);
    //         await createUserDocumentFromAuth(user, {displayName,surName,email,phoneNumber,jobTitle,companyName,martialStatus,dob,education,employementYear,currentEmployement});
    //         resetFormFields();
    //         navigate('/');
    //     }
    //     catch(err) {
    //         setError(err.message);
    //     }
    // }
    const handleSubmit = async (event) => {
        event.preventDefault();

        

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, 
                {
                    
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
                    currentEmployement
                });
                console.log('try'+ phoneNumber);
            resetFormFields();
            navigate('/');
        }
        



        catch(err){

            if(err.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }
            else{
                console.log('user creation encounted an error', err);
            }
            }
    }
    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }
     
    return(
        <>
        <Header />
        <div className='background-image'>
            <div className='signup'>
                <h1>SignUp</h1>
                {
                    error && <Alert variant='danger'>{error}</Alert> 
                }
                
                <form onSubmit={handleSubmit}>
                    <div className='two-input'>
                        <input type='text' placeholder='Name' name='displayName' className='flex-item-left input-feilds' required onChange={handleChange} value={displayName}></input>
                        <input type='text' placeholder='Surname' name='surName' className='flex-item-right input-feilds' onChange={handleChange} value={surName}></input>
                    </div>
                   
                    <div className='two-input'>
                        <input type='email' placeholder='Email' name='email' className='flex-item-left input-fields' onChange={handleChange} value={email}></input>
                        <input type='number' placeholder='Phone Number' name='phoneNumber' className='flex-item-right input-fields' onChange={handleChange} value={phoneNumber} ></input>
                    </div>
                    
                    <div className='two-input'>
                        <input type='password' placeholder='Password' name='password' className='flex-item-left input-fields' required onChange={handleChange} value={password}></input>
                        <input type='text' placeholder='Job Title' name='jobTitle' className='flex-item-right input-fields' onChange={handleChange} value={jobTitle}></input>
                    </div>
            
                    <div className='two-input'>
                        <input type='text' placeholder='Company Name' name='companyName' className='flex-item-left input-fields' onChange={handleChange} value={companyName}></input>
                        <select name="martialStatus"  className='flex-item-right input-fields' onChange={handleChange} value={martialStatus}>
                            <option>Martial Status</option>
                            <option value="maried">Maried</option>
                            <option value="single">Single</option>
                            <option value="complicated">Complicated</option>
                        </select>
                    </div>
        
                    <div className='two-input'>
                        <input type='date' placeholder='Date of Birth' name='dob' className='flex-item-left input-fields' onChange={handleChange} value={dob}></input>
                        <select name="education" className='flex-item-right input-fields' onChange={handleChange} value={education}>
                            <option>Highest Education Level</option>
                            <option value="matric">Matric</option>
                            <option value="inter">Inter</option>
                            <option value="graduation">Graduation</option>
                        </select>
                    </div>
    
                    <div className='two-input'>
                        <input type='number' placeholder='Year in Employement' name='employementYear' className='flex-item-left input-fields' onChange={handleChange} value={employementYear}></input>
                        <input type='number' placeholder='Time in the Current Company' name='currentEmployement' className='flex-item-right input-fields' onChange={handleChange} value={currentEmployement}></input>
                    </div>

                        <button type='submit' className='btn-green'>SignUp</button>
                        <p className='dont-account'>Don't have an Account?</p>
                        <Link to='/signin' className='btn-white'> SignIn</Link>

                </form>
            </div>
        </div>
        </>
    );
}

export default SignUp;
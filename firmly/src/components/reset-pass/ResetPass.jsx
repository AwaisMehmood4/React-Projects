import React, { useRef, useState } from 'react';
import './ResetPass.style.css';
import {useUserAuth} from  '../../context/UserAuthContext.component';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import { Alert } from 'react-bootstrap';


function ResetPass() {
    
    const {resetPass} = useUserAuth();
    const [email, setEmail] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            console.log('reset');
            await resetPass(email);
            
            navigate('/');
        }
        catch(err) {
            setError(err.message);
        }
    }


    return(
        <>
        <Header />
        <div className='background-image'>
            <div className='reset'>
                <h1>Reset Password</h1>
                {
                    error && <Alert variant='danger'>{error}</Alert> 
                }
                <p className='reset-desc'>Please check you email inbox. You will reveive the code shortly</p>
                <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email Address' name='email' className='input-fields' required onChange={(e) => setEmail(e.target.value)} ></input>
                    <br></br>
                    <br></br>
                    <button type='submit'  className='btn-white'> Send </button>
                
                </form>
            </div>
        </div>
        </>
    );
}

export default ResetPass;
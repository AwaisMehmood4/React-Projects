import React, {useState}  from 'react';
import './SignIn.style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth} from '../../context/UserAuthContext.component';
import { Alert } from 'react-bootstrap';
import Header from '../header/Header';


function SignIn() {

    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {signIn} = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await signIn(email,password);
            navigate('/dashboard');
        }
        catch(err) {
            setError(err.message);
        }
    }



    return(
        <>
        <Header />
        <div className='background-image'>
            <div className='signin'>
                <h1>SignIn</h1>
                {
                    error && <Alert variant='danger'>{error}</Alert> 
                }
                
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='Email Address' name='email' className='input-fields' required onChange={(e) => setEmail(e.target.value)} ></input>
                    <input type='password' placeholder='Password' name='password' className='input-fields' required onChange={(e) => setPassword(e.target.value)}></input>
                    <Link to='/reset-pass' className="position-right link-hover">Forgot Password?</Link>
                    <button  type='submit' className='btn-green' >
                            SignIn
                        </button>
                    <p className='dont-account'>Don't have an Account?</p>
                        <Link to='/signup' className='btn-white'>
                            Create an Account
                        </Link>
                
                </form>
            </div>
        </div>
        </>
    );
}

export default SignIn;
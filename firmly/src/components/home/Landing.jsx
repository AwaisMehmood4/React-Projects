import React, {useEffect} from 'react';
import './Home.style.css';
import {useNavigate} from 'react-router-dom'; 

function Landing() {

    const navigate = useNavigate();
    useEffect(() => {
        try {
            setTimeout(() => {
                navigate('signin')
            }, 3000)

        } catch (e) {
            console.log(e);
        }

    }, [navigate]);
    
    return(
        <div className='home'>
            <h1>Firmly</h1>
        
            </div>
    );
}

export default Landing;
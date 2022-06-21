import './User.style.css';
import Frame from 'react-frame-component';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AuthHeader from '../header/AuthHeader.component';
import { useUserAuth } from '../../context/UserAuthContext.component';
import { db } from '../../firebase/firebase';


const User = () => {
    const [blogs,setBlogs]=useState([])
  const fetchBlogs = async () => {
    const response=db.collection('user');
    const data=await response.get();
    data.docs.forEach(item=>{
     setBlogs([...blogs,item.data()])
    })
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

    return(
        <>
        <AuthHeader />
        <div className="user">
           
         
            <div className='edit-profile'>
                <h1 className='user-headeing'>Personal Information</h1>
                <Link to='edit-personal-info' className='user-edit-link' > Edit</Link>
            </div>   
            <div className='user-container'>
                
                    <div className='user-content'>
                        <h2>Name</h2>
                        <p></p>
                    </div>
               
                    <div className='user-content'>
                        <h2>SurName</h2>
                        <p></p>
                    </div>
            
                    <div className='user-content'>
                        <h2>Email</h2>
                        <p></p>
                    </div>
        
                    <div className='user-content'>
                        <h2>DOB</h2>
                        <p></p>
                    </div>
                   
    
            </div>
            
            <div className='edit-profile'>
                <h1 className='user-headeing'>Job Details</h1>
            </div>
            <div className='user-container'>
               
                <div className='user-content'>
                    <h2>Job Title</h2>
                    <p></p>
                </div>
                    
                <div className='user-content'>
                    <h2>Company Name</h2>
                    <p></p>
                </div>
                
                <div className='user-content'>
                    <h2>Martial Status</h2>
                    <p></p>
                </div>

                <div className='user-content'>
                    <h2>Education</h2>
                    <p></p>
                </div>
                <div className='user-content'>
                    <h2>Total Employement Year</h2>
                    <p></p>
                </div>
                <div className='user-content'>
                    <h2>Current Employement Year</h2>
                    <p></p>
                </div>
                    
                
            </div>
        
        </div>
        </>
    );
}

export default User;
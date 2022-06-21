import React from 'react';
import'./Edit-personal-info.style.css';
import {Link} from 'react-router-dom';
import AuthHeader from '../header/AuthHeader.component';


function EditPersonalInfo() {
    

    const UserEditProfile = () =>{

    }




    return(
        <>
        <AuthHeader />
        <div className='background-image'>
            <div className='signup'>
                <h1>Update Profile</h1>
                <form>
                    <div className='two-input'>
                        <input type='text' placeholder='Awais' className='flex-item-left input-feilds' ></input>
                        <input type='text' placeholder='Jutt' className='flex-item-right input-feilds' ></input>
                    </div>
                   
                    <div className='two-input'>
                        <input type='email' placeholder='awais.jutt@gmail.com' className='flex-item-left input-fields' ></input>
                        <input type='number' placeholder='03424281872' className='flex-item-right input-fields'  ></input>
                    </div>
                    
                    <div className='two-input'>
                        <input type='password' placeholder='Password' className='flex-item-left input-fields' disabled ></input>
                        <input type='text' placeholder='Web Development' className='flex-item-right input-fields' ></input>
                    </div>
            
                    <div className='two-input'>
                        <input type='text' placeholder='Onebyte' className='flex-item-left input-fields' ></input>
                        <select name="cars" className='flex-item-right input-fields'>
                            <option>Martial Status</option>
                            <option value="maried">Maried</option>
                            <option value="single">Single</option>
                            <option value="complicated">Complicated</option>
                        </select>
                    </div>
        
                    <div className='two-input'>
                        <input type='date' placeholder='16-02-1999' className='flex-item-left input-fields' ></input>
                        <select name="cars" className='flex-item-right input-fields'>
                            <option>Highest Education Level</option>
                            <option value="matric">Matric</option>
                            <option value="inter">Inter</option>
                            <option value="graduation">Graduation</option>
                        </select>
                    </div>
    
                    <div className='two-input'>
                        <input type='text' placeholder='2 year' className='flex-item-left input-fields' ></input>
                        <input type='text' placeholder='1 year' className='flex-item-right input-fields' ></input>
                    </div>

                        <Link to='/dashboard' className='btn-green' onClick={UserEditProfile()}>Update</Link>
                </form>
            </div>
        </div>
        </>
    );
}

export default EditPersonalInfo;
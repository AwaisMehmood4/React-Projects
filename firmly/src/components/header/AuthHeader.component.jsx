import React, { Fragment } from 'react';
import './AuthHeader.style.css';
import { Outlet, Link } from "react-router-dom";
import { useUserAuth } from '../../context/UserAuthContext.component';


const AuthHeader = () => {

    const {user, logout} = useUserAuth();

    const handleLogOut = async () => {
        try{
                await logout();
        }catch(err) {
            console.log(err.message);
        }
    }

    return(
        <Fragment>
            <div className='auth-header'>
                
            <Link className='user-name' to='/user-profile'> Hi!  {
                user && user.email   
            }</Link>

            <h1>firmly</h1>

            <button className='logout' onClick={handleLogOut}>Log Out</button>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default AuthHeader;
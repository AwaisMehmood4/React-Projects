import React, { Fragment } from 'react';
import './Header.style.css';
import { Outlet } from "react-router-dom";


const Header = () => {

    return(
        <Fragment>
            <div className='Header'>
                <h1>firmly</h1>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Header;
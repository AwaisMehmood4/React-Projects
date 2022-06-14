import { Outlet } from "react-router-dom";
import './Navigation.style.scss';
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';


const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'> 
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to='/ '>
                Home
               </Link>
               <Link className="nav-link" to='/shop'>
                SHOP
               </Link> 
               <Link className="nav-link" to='/contact'>
               CONTACT
              </Link> 
              <Link className="nav-link" to='/signin'>
              SIGN IN
             </Link> 
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;
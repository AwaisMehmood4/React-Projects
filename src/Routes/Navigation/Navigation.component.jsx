import { Outlet } from "react-router-dom";
import './Navigation.style.scss';
import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Link } from "react-router-dom";
import { UserContext,  } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../components/utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';


const Navigation = () => {

  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);


  
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
               {
                currentUser ? (
                  <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                ) :(
                  <Link className="nav-link" to='/auth'>
              SIGN IN
             </Link> 
                )

               } 
               
               <CartIcon />
              
            </div>
            {
              isCartOpen && <CartDropdown />
            }
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;
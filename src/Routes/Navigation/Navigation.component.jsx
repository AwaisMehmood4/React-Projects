import { Outlet } from "react-router-dom";
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from'./Navigation.style.jsx';
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
        <NavigationContainer>
            <LogoContainer to='/'> 
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinks>
               <NavLink to='/ '>
                Home
               </NavLink>
               <NavLink to='/shop'>
                SHOP
               </NavLink> 
               {
                currentUser ? (
                  <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                ) :(
                  <Link className="nav-link" to='/auth'>
              SIGN IN
             </Link> 
                )

               } 
                
               <CartIcon />
              
            </NavLinks>
            {
              isCartOpen && <CartDropdown />
            }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;
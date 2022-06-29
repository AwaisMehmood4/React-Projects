import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {useNavigate} from 'react-router-dom'; 
import Button from '../button/button.component';



import CartItem from '../cart-item/cart-item.component';
import {CartDropDownContainer, CartItems, EmptyMessage} from './cart-dropdown.style.jsx';



const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOut = () => {
        navigate('/checkout');
    }

    return(
        <CartDropDownContainer >
            <CartItems>
            {
                cartItems.length ? (cartItems.map(item => <CartItem key={item.id} CartItem={item} />)) : (
                    <EmptyMessage>Your Cart is empty</EmptyMessage>
                )
            }

            </CartItems>
            <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    );
}

export default CartDropdown;
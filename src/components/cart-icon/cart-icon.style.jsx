import Styled from 'styled-components';
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';



export const CartIconContainer = Styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`

export const ItemCount = Styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;

`
export const ShoppingIcon = Styled(ShoppingSvg)`

  width: 24px;
   height: 24px;
`



    
  
  
  
  
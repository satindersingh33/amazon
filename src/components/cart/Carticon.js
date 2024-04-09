// CartIcon.js
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useSelector } from 'react-redux';

function CartIcon() {
  // const itemCount = useSelector((state) => state.cart.items.length);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <ShoppingCartIcon />
      
    
    </div>
  );
}

export default CartIcon;

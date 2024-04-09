




import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const cartSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.catogery === newItem.catogery);

      if (existingItemIndex === -1) {
        state.cartItems.push(newItem);
      } else {

      }

      // Save cartItems to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    deleteFromCart(state, action) {
            const itemToDelete = action.payload;
            state.cartItems = state.cartItems.filter(item => item.catogery !== itemToDelete.catogery);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

          },
    },
  },
);

export const { addToCart , deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: []
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const newItem = action.payload;
//       const existingItemIndex = state.cartItems.findIndex(item => item.catogery === newItem.catogery);
//       if (existingItemIndex !== -1) {
       
//         state.cartItems[existingItemIndex].quantity += newItem.quantity;
//       } else {
//         state.cartItems.push(newItem);
//       }
//       localStorage.setItem('reduxState', JSON.stringify(state));
//     },
//     deleteFromCart(state, action) {
//       const itemToDelete = action.payload;
//       state.cartItems = state.cartItems.filter(item => item.catogery !== itemToDelete.catogery);
//     },
//   }
// });

// export const { addToCart, deleteFromCart } = cartSlice.actions;

// export default cartSlice.reducer;

import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../redux/cartSlice';
import { FaTrash } from 'react-icons/fa';
import style from './cart.module.css';

function Cart() {
  const cartData = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [selectedQuantities, setSelectedQuantities] = useState({});
  


  const handleDeleteItem = (item) => {
    dispatch(deleteFromCart(item));
  };

  const handleQuantityChange = (item, quantity) => {
    setSelectedQuantities((prevState) => ({
      ...prevState,
      [item.catogery]: quantity,
    }));
  };

  return (
    <div className={style.mainCart}>
      {cartData.length > 0 ? (
        cartData.map((item) => (
          <div key={item.id} className={style.cart}>
            <div className={style.cartImg}>
              <img className={style.cartImg_img} src={item.imgUrl} alt="" />
            </div>

            <div className={style.descriptionCart}>
              <div className={style.cartCatogery}>
                <p className={style.trendCart}>#{item.trendNo}</p>
                <p>{item.catogery}</p>
           

              </div>
              <p className={style.priceCart}>${item.rate}</p>


              <div className={style.selectCart}>
                <label htmlFor="">Size :</label>
                <select className={style.sizeCart} name="" id="">
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XxL">XXL</option>
                </select>

                <label htmlFor="">Quantity : </label>
                <select
                  className={style.sizeCart}
                  name=""
                  id=""
                  value={selectedQuantities[item.catogery] || '1'}
                  onChange={(e) => handleQuantityChange(item, e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
                    <option key={index} value={value}>{value}</option>
                  ))}
                </select>
              </div>
              <div className={style.dlt}>
                
                <p><b>Total Price : {parseInt(item.rate) * (selectedQuantities[item.catogery] || 1)}</b> </p>
                <div className={style.deleteCart} onClick={() => handleDeleteItem(item)}><FaTrash /></div>
              </div>

            </div>
            <div className={style.dealCart}>
              <p className={style.priceOff}>%16off</p>
              <p className={style.limitedDealCart}>Limited time deal</p>
            </div>
          </div>
        ))
      ) : (
        <h1>No data in the cart</h1>
      )}
    </div>
  );
}

export default Cart;































// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteFromCart } from '../redux/cartSlice';
// import { FaTrash } from 'react-icons/fa';
// import style from './cart.module.css';

// function Cart() {
//   const cartData = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();
//   const [selectedQuantities, setSelectedQuantities] = useState({});

//   const handleDeleteItem = (item) => {
//     dispatch(deleteFromCart(item));
//   };

//   const handleQuantityChange = (item, quantity) => {
//     setSelectedQuantities((prevState) => ({
//       ...prevState,
//       [item.catogery]: quantity,
//     }));
//   };

//   return (
//     <div className={style.mainCart}>
//       {cartData.length > 0 ? (
//         cartData.map((item) => (
//           <div key={item.id} className={style.cart}>
//             <div className={style.cartImg}>
//               <img className={style.cartImg_img} src={item.imgUrl} alt="" />
//             </div>

//             <div className={style.descriptionCart}>
//               <div className={style.cartCatogery}>
//                 <p className={style.trendCart}>#{item.trendNo}</p>
//                 <p>{item.catogery}</p>
           

//               </div>
//               <p className={style.priceCart}>${item.rate}</p>


//               <div className={style.selectCart}>
//                 <label htmlFor="">Size :</label>
//                 <select className={style.sizeCart} name="" id="">
//                   <option value="M">M</option>
//                   <option value="L">L</option>
//                   <option value="XL">XL</option>
//                 </select>

//                 <label htmlFor="">Quantity : </label>
//                 <select
//                   className={style.sizeCart}
//                   name=""
//                   id=""
//                   value={selectedQuantities[item.catogery] || '1'}
//                   onChange={(e) => handleQuantityChange(item, e.target.value)}
//                 >
//                   {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
//                     <option key={index} value={value}>{value}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className={style.dlt}>
                
//                 <p><b>Total Price : {parseInt(item.rate) * (selectedQuantities[item.catogery] || 1)}</b> </p>
//                 <div className={style.deleteCart} onClick={() => handleDeleteItem(item)}><FaTrash /></div>
//               </div>

//             </div>
//             <div className={style.dealCart}>
//               <p className={style.priceOff}>%16off</p>
//               <p className={style.limitedDealCart}>Limited time deal</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <h1>No data in the cart</h1>
//       )}
//     </div>
//   );
// }

// export default Cart;



















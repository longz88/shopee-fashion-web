import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
   const {
      getTotalCartAmount,
      all_product,
      cartItems,
      removeFromCart,
      addToCart,
      clearToCart,
   } = useContext(ShopContext);

   return (
      <div className="cartItems">
         <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
         </div>

         <hr />

         {all_product.map((item) => {
            if (cartItems[item.id] > 0) {
               return (
                  <div key={item.id}>
                     <div className="cartItems-format cartItems-format-main">
                        <img
                           src={item.image}
                           className="cartIcon-product-icon"
                           alt=""
                        />
                        <p className="cartItems-name">{item.name}</p>
                        <p>${item.new_price}</p>
                        <div className="cartItems-quantity-container">
                           <FontAwesomeIcon
                              icon={faMinus}
                              className="cartItems-icon"
                              onClick={() => removeFromCart(item.id)}
                           />

                           <button className="cartItems-quantity">
                              {cartItems[item.id]}
                           </button>
                           <FontAwesomeIcon
                              icon={faPlus}
                              className="cartItems-icon"
                              onClick={() => addToCart(item.id)}
                           />
                        </div>
                        <p>${item.new_price * cartItems[item.id]}</p>
                        <FontAwesomeIcon
                           icon={faXmark}
                           className="cartItems-remove-icon"
                           onClick={() => clearToCart(item.id)}
                        />
                     </div>
                     <hr />
                  </div>
               );
            } else {
               return null;
            }
         })}

         <div className="cartItems-down">
            <div className="cartItems-total">
               <h1>Cart Totals</h1>
               <div>
                  <div className="cartItems-total-item">
                     <p>Subtotal</p>
                     <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cartItems-total-item">
                     <p>Shipping Fee</p>
                     <p>Free</p>
                  </div>
                  <hr />
                  <div className="cartItems-total-item">
                     <h4>Total</h4>
                     <h4>${getTotalCartAmount()}</h4>
                  </div>

                  <button>PROCEED TO CHECKOUT</button>
               </div>
            </div>

            <div className="cartItems-promoCode">
               <p>If you have a promo code, enter it here!</p>
               <div className="cartItems-promoBox">
                  <input type="text" placeholder="Enter promo code" />
                  <button>Submit</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartItems;

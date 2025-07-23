
import React, { useContext } from "react";
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubtotal } = useContext(Context);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Direct navigation to success page without Stripe
    navigate("/success");
  };

  return (
    <div className="cart__panel">
      <div className="opac__layer" onClick={() => setShowCart(false)}></div>
      <div className="cart__content">
        <div className="cart__header">
          <span className="heading">Shopping Cart</span>
          <span className="close__btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {!cartItems?.length && (
          <div className="empty__cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return__cta" onClick={() => setShowCart(false)}>
              Return to Shop
            </button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart__footer">
              <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="text total">&#8377;{cartSubtotal}</span>
              </div>
              <div className="button">
                <button className="checkout__cta" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

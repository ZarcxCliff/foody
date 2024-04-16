import React, { useContext } from "react";
import "./cart.scss";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, food_list, revomeFromCart, getTotalCartAmount } =
        useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cart_items">
                <div className="cart_items_title">
                    <p>Items </p>
                    <p>Title </p>
                    <p>Price </p>
                    <p>Quantity </p>
                    <p>Total </p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    const quantity = cartItems[item._id];
                    const totalPrice = item.price * quantity;

                    if (!quantity) return null;

                    return (
                        <div>
                            <div
                                className="cart_items_title cart_items_item"
                                key={index}
                            >
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{quantity}</p>
                                <p>${totalPrice}</p>
                                <p
                                    className="cross"
                                    onClick={() => revomeFromCart(item._id)}
                                >
                                    X
                                </p>
                            </div>
                            <hr />
                        </div>
                    );
                })}
            </div>
            <div className="cart_buttom">
                <div className="cart_total">
                    <h2>Cart Total</h2>
                    <div className="">
                        <div className="cart_total_details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart_total_details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() > 0 ? 2 : 0}</p>
                        </div>
                        <hr />
                        <div className="cart_total_details">
                            <b>Total</b>
                            <b>
                                $
                                {getTotalCartAmount() > 0
                                    ? getTotalCartAmount() + 2
                                    : 0}
                            </b>
                        </div>
                    </div>
                    <button onClick={() => navigate("/order")}>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div className="cart_promocode">
                    <div>
                        <p>If you have a promo code enter it here</p>
                        <div className="cart_promocode_input">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

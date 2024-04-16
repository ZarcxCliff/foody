import React, { useContext } from "react";
import "./placeorder.scss";
import { StoreContext } from "../../context/StoreContext";

const PlaceOder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <form className="place_order">
            <div className="place_order_left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Region" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip Code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className=".">
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
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOder;

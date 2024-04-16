import React, { useContext } from "react";
import "./fooditem.scss";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, image, description }) => {
    const { cartItems, addToCart, revomeFromCart } = useContext(StoreContext);
    return (
        <div className="food_item">
            <div className="food_item_img_container">
                <img className="food_item_img" src={image} alt="" />
                {!cartItems[id] ? (
                    <img
                        className="add"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="food_item_counter">
                        <img
                            src={assets.remove_icon_red}
                            onClick={() => revomeFromCart(id)}
                            alt=""
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            src={assets.add_icon_green}
                            onClick={() => addToCart(id)}
                            alt=""
                        />
                    </div>
                )}
            </div>
            <div className="food_item_info">
                <div className="food_item_name_rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
            </div>
            <p className="food_item_description">{description}</p>
            <p className="food_item_price">${price}</p>
        </div>
    );
};

export default FoodItem;

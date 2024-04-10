import React, { useState } from "react";
import "./fooditem.scss";
import { assets } from "../assets/assets";

const FoodItem = ({ id, name, price, image, description }) => {
    const [itemCount, setItemCount] = useState(0);
    return (
        <div className="food_item">
            <div className="food_item_img_container">
                <img className="food_item_img" src={image} alt="" />
                {!itemCount ? (
                    <img
                        className="add"
                        onClick={() => setItemCount((prev) => prev + 1)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="food_item_counter">
                        <img
                            src={assets.remove_icon_red}
                            onClick={() => setItemCount((prev) => prev - 1)}
                            alt=""
                        />
                        <p>{itemCount}</p>
                        <img
                            src={assets.add_icon_green}
                            onClick={() => setItemCount((prev) => prev + 1)}
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

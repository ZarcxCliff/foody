import React, { useContext } from "react";
import "./fooddisplay.scss";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    return (
        <div className="food_display" id="food_display">
            <h2>Top dishes near you</h2>
            <div className="food_display_list">
                {food_list
                    .filter(
                        (food) =>
                            category === "All" || category === food.category
                    )
                    .map((food, index) => (
                        <FoodItem
                            key={index}
                            id={food._id}
                            name={food.name}
                            description={food.description}
                            price={food.price}
                            image={food.image}
                        />
                    ))}
            </div>
        </div>
    );
};

export default FoodDisplay;

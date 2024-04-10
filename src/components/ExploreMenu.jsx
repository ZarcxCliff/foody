import React from "react";
import "./exploremenu.scss";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore_menu" id="explore_menu">
            <h1>Explore Our Menu</h1>
            <p className="explore_menu_text">
                Choose form a diverse menu featuring a delectable array of
                dishes crafted with the finest ingredients and culinary
                expertise.Our misson is to satisfy your cravings and elevate
                your dining experience, one Delicious meal at a time.Eat healthy
                , eat well.
            </p>
            <div className="explore_menu_list">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            onClick={() =>
                                setCategory((prev) =>
                                    prev === item.menu_name
                                        ? "All"
                                        : item.menu_name
                                )
                            }
                            key={index}
                            className="explore_menu_list_item"
                        >
                            <img
                                className={
                                    category === item.menu_name ? "active" : ""
                                }
                                src={item.menu_image}
                                alt=""
                            />
                            <p>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;

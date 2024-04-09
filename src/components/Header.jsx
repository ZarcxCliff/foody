import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="blur">
                    <h2>Order Your Favourite Food Here</h2>
                    <p>
                        Choose form a diverse menu featuring a delectable array
                        of dishes crafted with the finest ingredients and
                        culinary expertise.Our misson is to satisfy your
                        cravings and elevate your dining experience, one
                        Delicious meal at a time.Eat healthy , eat well.
                    </p>
                </div>
                <button>View Menu</button>
            </div>
        </div>
    );
};

export default Header;

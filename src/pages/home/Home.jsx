import React, { useState } from "react";
import "./home.scss";
import { ExploreMenu, FoodDisplay, Header } from "../../components";

const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div className="home">
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay />
        </div>
    );
};

export default Home;

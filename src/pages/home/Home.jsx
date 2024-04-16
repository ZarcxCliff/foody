import React, { useState } from "react";
import "./home.scss";
import {
    AppDownload,
    ExploreMenu,
    FoodDisplay,
    Header,
} from "../../components";

const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div className="home">
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
        </div>
    );
};

export default Home;

import React from "react";
import "./appdownload.scss";
import { assets } from "../assets/assets";

const AppDownload = () => {
    return (
        <div className="appdownload" id="appdownload">
            <p>
                For Better Experience Download <br /> Belle-ful App
            </p>
            <div className="appdownload_platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    );
};

export default AppDownload;

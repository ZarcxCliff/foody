import React, { useState } from "react";
import "./loginpopup.scss";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
    const [curstate, SetCurState] = useState("Login");
    return (
        <div className="loginpopup">
            <form className="loginpopup_container">
                <div className="loginpopup_title">
                    <h2>{curstate}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />
                </div>
                <div className="loginpopup_input">
                    {curstate === "Login" ? (
                        <></>
                    ) : (
                        <input type="text" placeholder="Your Name" required />
                    )}

                    <input type="email" placeholder="Your Email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button>
                    {curstate === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="loginpopup_condition">
                    <input type="checkbox" required />
                    <p>
                        By continuing ,I agree to the terms and conditions used
                        & privacy policy
                    </p>
                </div>
                {curstate === "Login" ? (
                    <p>
                        Create a New Account?{" "}
                        <span onClick={() => SetCurState("Sign Up")}>
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => SetCurState("Login")}>
                            Click here
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;

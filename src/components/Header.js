import {LOGO_URL} from "../utils/constant";
import { useState } from "react";

const Header = () => {
    const [btnText, setbtnText] = useState("Login");

    function checkAuth() {
        btnText === "Login" ? setbtnText("Logout") : setbtnText("Login");
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button class="auth-btn" onClick={checkAuth}>{btnText}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
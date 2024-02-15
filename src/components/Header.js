import {LOGO_URL} from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnText, setbtnText] = useState("Login");

    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    //is dependency array is [btnNameReact](having any value) => called everytime btnNameReact is updated
    useEffect(()=> {
        console.log("on every render");
    })
    useEffect(()=> {
        console.log("on initial render(just once)");
    },[])
    useEffect(()=> {
        console.log("called everytime btnNameReact is updated");
    },[btnText])

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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button class="auth-btn" onClick={checkAuth}>{btnText}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
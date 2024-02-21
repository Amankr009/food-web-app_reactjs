import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import {LOGO_URL} from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnText, setbtnText] = useState("Login");
    const {defaultUser, setUserName} = useContext(UserContext);

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
        btnText === "Login" ? setUserName("Aman Kumar Yadav") : setUserName("User");
    }

    const internetStatus = useOnlineStatus();

    return (
        <div className="header bg-gray-100">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items self-center">
                <ul>
                    <h4>Hi, {defaultUser}</h4>
                    <li className="internet-status">Status: {internetStatus ? "🟢" :  "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="auth-btn border w-28 text-center active:bg-gray-300" onClick={checkAuth}>{btnText}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
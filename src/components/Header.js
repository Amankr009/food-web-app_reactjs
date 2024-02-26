import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

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
        //console.log("on every render");
    })
    useEffect(()=> {
        //console.log("on initial render(just once)");
    },[])
    useEffect(()=> {
        //console.log("called everytime btnNameReact is updated");
    },[btnText])

    function checkAuth() {
        btnText === "Login" ? setbtnText("Logout") : setbtnText("Login");
        //btnText === "Login" ? setUserName("Aman Kumar Yadav") : setUserName("User");
    }

    const internetStatus = useOnlineStatus();

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header bg-gray-100 sticky top-0 z-50">
            <div className="flex">
                <img className="logo" src={LOGO_URL} />
                <div className="font-semibold font-mono self-center text-xl px-4">Hi, {defaultUser}</div>
            </div>
            <div className=" flex nav-items self-center gap-2 font-semibold text-xl">
                <div className="hover:bg-gray-300 px-4">
                    <Link to="/">Home</Link>
                </div>
                <div className="hover:bg-gray-300 px-4">
                    <Link to="/grocery">Grocery</Link>
                </div>
                <div className="hover:bg-gray-300 px-4">
                    <Link to="/about">About Us</Link>
                </div>
                <div className="hover:bg-gray-300 px-4">
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className="hover:bg-gray-300 px-4">
                    <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                </div>
                <button className="auth-btn border-slate-900 border-2 w-28 text-center hover:bg-gray-300 px-4 active:bg-red-500 rounded-sm" onClick={checkAuth}>{btnText}</button>
                <div className="internet-status">Status: {internetStatus ? "🟢" :  "🔴"}</div>
            </div>
        </div>
    );
};

export default Header;
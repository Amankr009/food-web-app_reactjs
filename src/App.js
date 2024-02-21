import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, errorElement, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - ResturantContainer
 *   - ResturantCard
 *     - Img
 *     - Name of Res, Start Rating, Cusine, Delay Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

// add object, render all cards


const Grocery = lazy(() => import("./components/Grocery"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            userName: "User"
        }
        setUserName(data?.userName);
    },[]);

    return (
        <UserContext.Provider value={{defaultUser: userName, setUserName}}>
            <div className="app">
                <Header />
                {/** Outlet from react-router-dom helps to render children as per path, their is track of Outlet in our code */}
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading..</h1>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<h1>Loading..</h1>}>
                        <Contact />
                    </Suspense>
                )
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
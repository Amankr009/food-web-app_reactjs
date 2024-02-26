import Header from "../src/components/Header";
import appStore from "../src/utils/appStore";

import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";


describe("Header Component test cases", () => {

    it("Should have login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const button = screen.getByText("Login");

        expect(button).toBeInTheDocument();
    });

    it("Should have 0 cart item", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText("Cart - (0 items)");

        expect(cartItems).toBeInTheDocument();
    });

    it("Should have cart item", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText(/Cart/);

        expect(cartItems).toBeInTheDocument();
    });

    it("Should change to Logout on Login button click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", {name:"Login"});

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", {name:"Logout"});

        expect(logoutButton).toBeInTheDocument();
    });
});
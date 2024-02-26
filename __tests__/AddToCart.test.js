import {render, screen, fireEvent} from "@testing-library/react";
import { Provider } from "react-redux";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import MOCK_DATA from "./mocData/menuItems.json";
import RestaurantMenu from "../src/components/RestaurantMenu";
import appStore from "../src/utils/appStore";
import Header from "../src/components/Header"
import Cart from "../src/components/Cart";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

describe("Test cases for add to cart item check", () => {

    it("Should render resturant menu items of recommended list", async () => {
        await act(async () => 
            render(
                <BrowserRouter>
                    <Provider store={appStore} >
                        <RestaurantMenu menuData={MOCK_DATA} />
                    </Provider>
                </BrowserRouter>
            )
        );

        expect(screen.getByText("Recommended (20)")).toBeInTheDocument();
    });

    it("Should add items of loaded pizza", async () => {
        await act(async () => 
            render(
                <BrowserRouter>
                    <Provider store={appStore} >
                        <Header />
                        <RestaurantMenu menuData={MOCK_DATA} />
                    </Provider>
                </BrowserRouter>
            )
        );
        
        const typeBtn = screen.getByText("Loaded Pizza (9)");

        fireEvent.click(typeBtn);
        fireEvent.click(typeBtn);

        const items = screen.getAllByTestId("menu-items");
        expect(items.length).toBe(9);

        const addItems = screen.getAllByText("Add +");
        expect(addItems.length).toBe(9);
        
        expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

        fireEvent.click(addItems[0]);

        expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

        fireEvent.click(addItems[2]);

        expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

        fireEvent.click(addItems[8]);

        expect(screen.getByText("Cart - (3 items)")).toBeInTheDocument();
    });

    it("Should same no of items in the cart", async () => {
        await act(async () => 
            render(
                <BrowserRouter>
                    <Provider store={appStore} >
                        <Header />
                        <RestaurantMenu menuData={MOCK_DATA} />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        );
             
        expect(screen.getByText("Cart - (3 items)")).toBeInTheDocument();

        expect((screen.getAllByTestId("cart-item")).length).toBe(3);
        
        const clearBtn = screen.getByRole("button", {name: "Clear Cart"});

        expect(clearBtn).toBeInTheDocument();

        fireEvent.click(clearBtn);

        expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
    });
});
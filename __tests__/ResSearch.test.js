import {render, screen, fireEvent} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Body from "../src/components/Body";
import MOCK_DATA from "./mocData/allResCards.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

describe("Test cases for Resturant Search", () => {
    it("Should search all resturant name having burder in their name", async () => {
        await act(async () => 
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const cardsNumberBeforeSearch = screen.getAllByTestId("res-card");

        expect(cardsNumberBeforeSearch.length).toBe(20);

        const searchBtn = screen.getByRole("button", {name: "Search"});
        const searchInput = screen.getByTestId("search-input");

        fireEvent.change(searchInput, {target: {value: "burger"}});
        fireEvent.click(searchBtn);

        const cardsNumberAfterSearch = screen.getAllByTestId("res-card");

        expect(cardsNumberAfterSearch.length).toBe(1);
    });

    it("Should check top resturant count", async () => {
        await act(async () => 
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const topRes = screen.getByRole("button", {name: /Top Rated/});

        fireEvent.click(topRes);

        const resCards = screen.getAllByTestId("res-card");

        expect(resCards.length).toBe(7);
    });
});
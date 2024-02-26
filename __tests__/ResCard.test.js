import { render, screen } from "@testing-library/react";
import ResCard, {VegResCard} from "../src/components/ResCard";
import "@testing-library/jest-dom";

import MOCK_DATA from "./mocData/resCard.json";


describe("Test cases for ResCard Component", () => {

    it("Should have resturant card", () => {
        render(
            <ResCard resData={MOCK_DATA} />
        );

        const resName = screen.getByText(/McDonald/)

        expect(resName).toBeInTheDocument();
    });

    it("Should have resturant card with veg label", () => {
        const VegRes = VegResCard(ResCard);
        render(
            <VegRes resData={MOCK_DATA} />
        );

        const resName = screen.getByTestId("veg");

        expect(resName).toBeInTheDocument();
    });
});
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../src/components/Contact";

describe("Test cases for Contact Us page", () => {
    // Helper functions for test cases 
/*  beforeAll(() => {
        console.log("Runs before test cases");
    });

    beforeEach(() => {
        console.log("Runs before each test cases");
    });

    afterAll(() => {
        console.log("Runs after test cases");
    });

    afterEach(() => {
        console.log("Runs after each test cases");
    }); 
*/
    it("Should have a header", () => {
        render(<Contact/>);
    
        const header = screen.getByRole("heading");
    
        expect(header).toBeInTheDocument();
    });
    
    it("Should have submit button", () => {
        render(<Contact/>);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    });
    
    it("Should have input box with Name placeholder", () => {
        render(<Contact/>);
    
        const nameField = screen.getByPlaceholderText("Name");
    
        expect(nameField).toBeInTheDocument();
    });
    
    it("Should have two input box", () => {
        render(<Contact/>);
    
        const textField = screen.getAllByRole("textbox");
    
        expect(textField.length).toBe(2);
    });
    
    it("Should not be two buttons", () => {
        render(<Contact/>);
    
        const buttonCount = screen.getAllByRole("button");
    
        expect(buttonCount.length).not.toBe(2);
    });
});

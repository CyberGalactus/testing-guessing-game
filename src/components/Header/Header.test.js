 import { render, screen } from "@testing-library/react";
 import Header from "./index";

describe("The page title renders and text is correct", () => {

    test("The page title renders on page load", () => {
        render(<Header />);

        const pageTitle = screen.getByRole("heading", { level: 1 });
        expect(pageTitle).toBeInTheDocument();
    });

    test("The page title follows correct format", () => {
        render(<Header />);

        const pageTitle = screen.getByRole("heading", { level: 1 });
        expect(pageTitle).toHaveTextContent(/Testing Max Guessing Game/i);
    });

 });
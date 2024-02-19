import { render, screen } from "@testing-library/react";
import ColorOptions from ".";

describe("The different color options renders as expected", () => {
  const mockColors = ["ABD123", "3FA12A", "DAF378"];
  test("So that component exists in the document", () => {
    render(<ColorOptions colors={mockColors} />);

    const colorOptions = screen.getByTestId("color-options");

    expect(colorOptions).toBeInTheDocument();
  });
  test("That there are 3 options to click on", () => {
    render(<ColorOptions colors={mockColors} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toEqual(3);
  });
});
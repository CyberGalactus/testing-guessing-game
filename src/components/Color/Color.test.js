import { render, screen } from "@testing-library/react";
import Color from ".";

describe("Each button works as expected and has correct text", () => {
  const mockColor = "ABD232";
  test("Button renders", () => {
    render(<Color color={mockColor} />);

    const button = screen.getByRole("button", { name: mockColor });

    expect(button).toBeInTheDocument();
  });
  test("Buttons text content has a length of 6", () => {
    render(<Color color={mockColor} />);

    const button = screen.getByRole("button", { name: mockColor });

    expect(button.textContent.length).toEqual(6);
  });
  test("Buttons text content should equal the color that is passed in", () => {
    render(<Color color={mockColor} />);

    const button = screen.getByRole("button", { name: mockColor });

    expect(button.textContent).toEqual(mockColor);
  });
  test("Buttons text content follows HEX syntax and only allows uppercase", () => {
    render(<Color color={mockColor} />);

    const button = screen.getByRole("button", { name: mockColor });

    expect(/^[A-F0-9]+$/.test(button.textContent)).toBe(true);
  });
});

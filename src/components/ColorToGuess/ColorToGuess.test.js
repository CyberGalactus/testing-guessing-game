import { render, screen } from "@testing-library/react";
import ColorToGuess from ".";

describe("Color to guess component renders and has the correct color", () => {
  const mockCorrectColor = "A1F2GH";
  test("Component is being displayed in the document", () => {
    render(<ColorToGuess correctColor={mockCorrectColor} />);
    const colorToGuess = screen.getByTestId(/color-to-guess/i);

    expect(colorToGuess).toBeInTheDocument();
  });

  test("Background color is the same as the color user is trying to guess", async () => {
    render(<ColorToGuess correctColor={mockCorrectColor} />);
    const colorToGuess = screen.getByTestId(/color-to-guess/i);

    expect(colorToGuess).toHaveStyle(`background-color: #${mockCorrectColor};`);
  });
});
import { render, screen } from "@testing-library/react";
import CorrectGuessesInARow from ".";

describe("Correct guesses component and its value renders", () => {
  test("So that the component has an element with text being rendered", () => {
    render(<CorrectGuessesInARow correctGuessesInARow={0} />);

    const correctGuessesInARowText = screen.getByTestId("correct-guesses-in-a-row-text");

    expect(correctGuessesInARowText).toBeInTheDocument();
  });

  test("So that the component has an element with the the value of correctGuesses", () => {
    render(<CorrectGuessesInARow correctGuessesInARow={0} />);

    const correctGuessesInARowValue = screen.getByTestId("correct-guesses-in-a-row-value");

    expect(correctGuessesInARowValue).toBeInTheDocument();
  });

  test("So that the text content matches the decided pattern", () => {
    render(<CorrectGuessesInARow correctGuessesInARow={0} />);

    const correctGuessesInARowText = screen.getByTestId("correct-guesses-in-a-row-text");

    expect(correctGuessesInARowText).toHaveTextContent(/Correct guesses in a row:/i);
  });

  test("So that the value of correctGuesses is 0 when page has rendered", () => {
    render(<CorrectGuessesInARow correctGuessesInARow={0} />);

    const correctGuessesInARowValue = screen.getByTestId("correct-guesses-in-a-row-value");

    expect(correctGuessesInARowValue.textContent).toEqual("0");
  });
});

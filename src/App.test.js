import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// dont focus on this function, it is just used to convert RGB to HEX
function convertBackToHex(value) {
  let rgbValues = value.match(/\d+/g).map(Number);
  let correctColorInCorrectFormat = rgbToHex(
    rgbValues[0],
    rgbValues[1],
    rgbValues[2],
  );
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return (
      componentToHex(r) +
      componentToHex(g) +
      componentToHex(b)
    ).toUpperCase();
  }
  return correctColorInCorrectFormat;
}

describe("Render app and game functionality works as expected", () => {
  test("Render app comonent", () => {
    render(<App />);
    const app = screen.getByTestId("app");

    expect(app).toBeInTheDocument();
  });

  test("If wrong guess is made render a wrong guess component", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    const correctColorInRGB = screen.getByTestId(/color-to-guess/i).style.backgroundColor;
    // the function below just converts correctColor back to HEX format because Javascript automatically converted the HEX to rgb...
    const correctColor = convertBackToHex(correctColorInRGB);
    let wrongGuess = screen.queryByTestId("wrong-guess");

    expect(wrongGuess).not.toBeInTheDocument();

    buttons.forEach((button) => {
      if (button.textContent !== correctColor) {
        fireEvent.click(button);
      }
    });
    wrongGuess = screen.queryByTestId("wrong-guess");
    expect(wrongGuess).toBeInTheDocument();
    expect(wrongGuess).toHaveTextContent(/wrong guess/i);
  });

  test("If wrong guess is made change correct guesses in a row to 0", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    const correctColorInRGB = screen.getByTestId(/color-to-guess/i).style.backgroundColor;
    const correctColor = convertBackToHex(correctColorInRGB);
    const correctGuessesInARowValue = screen.getByTestId("correct-guesses-in-a-row-value");

    buttons.forEach((button) => {
      if (button.textContent !== correctColor) {
        fireEvent.click(button);
      }
    });
    expect(correctGuessesInARowValue.textContent).toEqual("0");
  });

  test("If user makes correct guess increase correct guesses in a row value by 1", () => {
    render(<App />);
    let buttons = screen.getAllByRole("button");
    let correctColorInRGB = screen.getByTestId(/color-to-guess/i).style.backgroundColor;
    let correctColor = convertBackToHex(correctColorInRGB);
    let correctGuessesInARowValue = screen.getByTestId("correct-guesses-in-a-row-value");

    expect(correctGuessesInARowValue.textContent).toEqual("0");

    buttons.forEach((button) => {
      if (button.textContent === correctColor) {
        fireEvent.click(button);
      }
    });
    expect(correctGuessesInARowValue.textContent).toEqual("1");

    buttons = screen.getAllByRole("button");
    correctColor = screen.getByTestId(/color-to-guess/i).style.backgroundColor;
    correctColor = convertBackToHex(correctColor);

    buttons.forEach((button) => {
      if (button.textContent === correctColor) {
        fireEvent.click(button);
      }
    });
    correctGuessesInARowValue = screen.getByTestId("correct-guesses-in-a-row-value");
    expect(correctGuessesInARowValue.textContent).toEqual("2");
  });

  test("If user makes correct guess generate new hex colors for each button", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    const correctColorInRGB = screen.getByTestId(/color-to-guess/i).style.backgroundColor;
    const correctColor = convertBackToHex(correctColorInRGB);

    buttons.forEach((button) => {
      if (button.textContent === correctColor) {
        fireEvent.click(button);
      }
    });

    const newButtons = screen.getAllByRole("button");
    buttons.forEach((button, index) => {
      expect(button.textContent).not.toEqual(newButtons[index].textContent);
    });
  });

  test("If user makes correct guess generate a new color for user to guess", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    const correctColorInRGB = screen.getByTestId(/color-to-guess/i).style.backgroundColor;
    const correctColor = convertBackToHex(correctColorInRGB);

    buttons.forEach((button) => {
      if (button.textContent === correctColor) {
        fireEvent.click(button);
      }
    });

    const newCorrectColorInRGB = screen.getByTestId(/color-to-guess/i).style.backgroundColor;

    const newCorrectColor = convertBackToHex(newCorrectColorInRGB);

    expect(correctColor).not.toEqual(newCorrectColor);
  });
});

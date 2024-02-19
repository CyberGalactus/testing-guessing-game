import React from 'react';
import Styles from "./CorrectGuessesInARow.module.css"

const CorrectGuessesInARow = ({ correctGuessesInARow }) => {
  return (
    <div className={Styles.guess}>
      <p data-testid="correct-guesses-in-a-row-text">Correct guesses in a row:</p>
      <p data-testid="correct-guesses-in-a-row-value" className={Styles.colorguess}>{correctGuessesInARow}</p>
    </div>
  );
};

export default CorrectGuessesInARow;

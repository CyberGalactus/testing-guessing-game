import React from 'react';
import Styles from "./ColorToGuess.module.css"

const ColorToGuess = ({ correctColor }) => {
  console.log(correctColor);
  return (
    <div data-testid="color-to-guess" className={Styles.ColorToGuess}>
      <p className={Styles.color} style={{ backgroundColor: correctColor }}>
      </p>
    </div>
  );
};

export default ColorToGuess;

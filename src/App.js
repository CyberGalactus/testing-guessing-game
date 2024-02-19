import React, { useState, useEffect } from "react";
import ColorOptions from './components/ColorOptions';
import ColorToGuess from './components/ColorToGuess';
import CorrectGuessesInARow from './components/CorrectGuessesInARow';
import Header from './components/Header';
import WrongGuess from './components/WrongGuess';

const getRandomColors = () => {
  const randomColors = [];
  while (randomColors.length < 3) {
    const randomColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    if (!randomColors.includes(randomColor)) {
      randomColors.push(randomColor);
    }
  }
  return randomColors;
};

function App() {
  const [correctColor, setCorrectColor] = useState(null);
  const [correctGuessesInARow, setCorrectGuessesInARow] = useState(0);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [colors, setColors] = useState(getRandomColors());

  const colorClick = (guessedColor) => {
    if (guessedColor === correctColor) {
      setCorrectGuessesInARow(prevCount => prevCount + 1);
    } else {
      setWrongGuess(true);
      setCorrectGuessesInARow(0);
    }
  };

  useEffect(() => {
    setCorrectColor(getCorrectColor());
  }, [colors, correctGuessesInARow]);

  const getCorrectColor = () => colors.length > 0 ? colors[Math.floor(Math.random() * colors.length)] : null;

  useEffect(() => {
    setColors(getRandomColors());
  }, [correctGuessesInARow]);

  return (
    <div data-testid="app">
      <Header />
      <CorrectGuessesInARow correctGuessesInARow={correctGuessesInARow} />
      <ColorToGuess correctColor={correctColor} />
      <ColorOptions
        colors={colors}
        colorClick={colorClick}
      />
      {wrongGuess && <WrongGuess />}
    </div>
  );
}

export default App;
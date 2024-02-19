import React from "react";
import Styles from "./ColorOptions.module.css"
import Color from "../Color";

const ColorOptions = ({ colors, colorClick }) => {
  return (
    <div data-testid="color-options" className={Styles.ColorOptions}>
      {colors.map((color, index) => (
        <Color 
        color={color}
        key={index}  
        colorClick={() => colorClick(color)}
        />
      ))}
    </div>
  );
}; 


export default ColorOptions;

import React from "react";
import Styles from "./Color.module.css";

const Color = ({ color, colorClick}) => {
  return (
    <div>
    <button onClick={() => colorClick(color)} className={Styles.colorbutton}>
      {color}
    </button>
    </div>
  );
};

export default Color;
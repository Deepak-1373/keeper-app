import React from "react";
import { colors } from "./data";
import "./ColorList.css";

export const ColorList = ({ handleColorListChange }) => {
  return (
    <span className="color-list flex items-center justify-center">
      {colors.map((color) => (
        <button
          type="button"
          key={color}
          className="color-picker"
          style={{ backgroundColor: color }}
          onClick={() => handleColorListChange("backgroundColor", color)}
        ></button>
      ))}
    </span>
  );
};

import React from "react";
import { colors } from "./data";
import "./ColorList.css";

export const ColorList = () => {
  const handleOnChange = (string, property) => {
    console.log(string, property);
  };
  return (
    <span className="color-list flex items-center justify-center">
      {colors.map((color) => (
        <button
          type="button"
          key={color}
          className="color-picker"
          style={{ background: color }}
          onClick={() => handleOnChange("backgroundColor", color)}
        ></button>
      ))}
    </span>
  );
};

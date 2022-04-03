import React from "react";
import { darkColors, lightColors } from "./data";
import { useTheme } from "../../context";
import "./ColorList.css";

export const ColorList = ({ handleColorListChange, formDisplay }) => {
  const { theme } = useTheme();

  const themeValue = theme === "dark" ? darkColors : lightColors;

  return (
    <span className="color-list flex items-center justify-center">
      {themeValue.map((color) => (
        <button
          type="button"
          key={color}
          className="color-picker"
          style={{
            backgroundColor: color,
            display: formDisplay ? "block" : "none",
          }}
          onClick={() => handleColorListChange("backgroundColor", color)}
        ></button>
      ))}
    </span>
  );
};

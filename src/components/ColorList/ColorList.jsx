import React from "react";
import { colors } from "./data";
import { useTheme } from "../../context";
import "./ColorList.css";

export const ColorList = ({ handleColorListChange }) => {
  const { theme } = useTheme();

  // const themeValue = theme === "dark" ? darkColors : lightColors;

  return (
    <span className="color-list flex items-center justify-center">
      {colors.map((color) => (
        <button
          type="button"
          key={color.id}
          className="color-picker"
          style={{
            backgroundColor: color[theme],
          }}
          onClick={() => handleColorListChange("backgroundColor", color)}
        ></button>
      ))}
    </span>
  );
};

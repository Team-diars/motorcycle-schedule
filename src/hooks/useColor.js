import { useState } from "react";

export const useColor = (initialState = {}) => {
  const [color, setColor] = useState(initialState);
  const { myColor } = color;
  const handleColor = () => {
    const color = myColor === "#91E72B" ? "#7B252A" : "#91E72B";
    setColor({
      myColor: color,
    });
  };
  return [color, handleColor];
};

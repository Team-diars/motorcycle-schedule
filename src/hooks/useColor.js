import { useState } from "react";

export const useColor = (initialState = {}) => {
  const [color, setColor] = useState(initialState);
  // const [motorcyclist, setMotorcyclist] = useState(8);
  const { myColor } = color;
  const reset = () => {
    setColor({
      myColor: 'red'
    })
  };
  const handleColor = () => {
    const newColor = myColor === "green" ? "red" : "green";
    setColor({
      myColor: newColor,
    });
    // setMotorcyclist(motorcyclist - 1);
  };
  return [color, handleColor, reset];
};

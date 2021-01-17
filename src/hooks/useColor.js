import { useState } from 'react'

export const useColor = (initialState = {}) => {
  const [color,setColor] = useState(initialState);
  const [motorcyclist, setMotorcyclist] = useState(8);
  const handleColor = () => {
    setColor({
      myColor: "red",
      motorcyclist: setMotorcyclist( motorcyclist - 1)
    });
  }
  return [color,handleColor,motorcyclist];
}

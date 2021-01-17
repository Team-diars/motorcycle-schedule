import React, { useState } from 'react'

export const useMotorcyclist = () => {
  const [motorcyclist, setMotorcyclist] = useState(8);
  return motorcyclist;
}

import styled from 'styled-components'
import React from 'react'
import { useColor } from '../../hooks/useColor';
export const ScheduleButton = ({hour,handleQuantity,isDisabled}) => {
  const [color,handleColor] = useColor({myColor: "#91E72B"});
  const { myColor } = color; 
  const handleFunctions = () =>{
    handleColor();
    handleQuantity(myColor);
  }
  return <Button className="btn m-2" onClick={handleFunctions} style={{backgroundColor: myColor}}   disabled={ myColor === '#91E72B' && isDisabled ? true : false }>{hour}</Button>
}

const Button = styled.button `
  padding:10px;
  width: 100px;
`;
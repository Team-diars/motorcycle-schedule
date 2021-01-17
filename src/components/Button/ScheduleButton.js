import styled from 'styled-components'
import React from 'react'
import { useColor } from '../../hooks/useColor';
export const ScheduleButton = ({hour,handleQuantity,isDisabled}) => {
  const [color,handleColor,] = useColor({myColor: "green"});
  const { myColor } = color; 
  const newhandleColor = ()=>{
    handleColor()
    handleQuantity(myColor)
  }
  return (
    <>
      <Button onClick={newhandleColor} style={{backgroundColor: myColor}} disabled={ myColor === 'green' ? isDisabled : false }>{hour}</Button>
    </>
  )
}

export const Button = styled.button `
  padding:10px;
  width: 100px;
`;
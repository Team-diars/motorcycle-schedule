import styled from 'styled-components'
import React, { useState } from 'react'
import { useColor } from '../../hooks/useColor';
export const ScheduleButton = ({hour}) => {
  // const [color, setColor] = useState('green');
  const [color,handleColor] = useColor({myColor: "green"});
  const { myColor } = color; 
  return (
    <>
      <Button onClick={handleColor} style={{backgroundColor: myColor}}>{hour}</Button>
    </>
  )
}

export const Button = styled.button `
  padding:10px;
  width: 100px;
`;
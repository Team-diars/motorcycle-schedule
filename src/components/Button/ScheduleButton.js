import styled from 'styled-components'
import React, { useState } from 'react'

export const ScheduleButton = ({hour}) => {
  const [color, setColor] = useState('green');
  const handleColor = ()=>{
    return setColor('red');
  }
  return (
    <>
      <Button onClick={handleColor} style={{backgroundColor: color}}>{hour}</Button>
    </>
  )
}

export const Button = styled.button `
  padding:10px;
  width: 100px;
`;
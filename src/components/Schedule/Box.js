import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button/ScheduleButton";

export const Box = () => {
  const [motorcyclist, setMotorcyclist] = useState(8);
  const buttons = [];
  new Array(13).fill().forEach((acc, index) => {
    buttons.push(moment({ hour: 8 + index }).format("h:mm A"));
    index !== 12 &&
    buttons.push(moment({ hour: 8 + index, minute: 30 }).format("h:mm A"));
  });
  const [ color , setColor ] = useState('green');

  const handleColor = () => {
    return setColor('red');
  }

  return (
    <NewBox>
      <h1>Free Motorcyclist: {	motorcyclist }</h1>
      <WrapperButtons>
        {buttons.map((button, index) => {
          return <Button key={index} style={{backgroundColor: `${color}`}} onClick={handleColor}>{button}</Button>
        })}
      </WrapperButtons>
    </NewBox>
  );
};

const NewBox = styled.div`
  /* background-color: #cdcdcd; */
`;
const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

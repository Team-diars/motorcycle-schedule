import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { ScheduleButton } from "../Button/ScheduleButton";

export const Box = () => {
  const [motorcyclist, setMotorcyclist] = useState(8);
  const buttons = [];
  new Array(13).fill().forEach((acc, index) => {
    buttons.push(moment({ hour: 8 + index }).format("h:mm A"));
    index !== 12 &&
    buttons.push(moment({ hour: 8 + index, minute: 30 }).format("h:mm A"));
  });
  return (
    <NewBox>
      <h1>Free Motorcyclist: {	motorcyclist }</h1>
      <WrapperButtons>
        {buttons.map((button, index) => {
          return <ScheduleButton key={index} hour={button}></ScheduleButton>
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

import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { useColor } from "../../hooks/useColor";
import { ScheduleButton } from "../Button/ScheduleButton";

export const Box = () => {
  // const [motorcyclist, setMotorcyclist] = useState(8);
  const [, , , reset] = useColor();
  const [motorcyclist, setMotorcyclist] = useState(8);
  const [disabled, setDisabled] = useState(false);
  const buttons = [];
  new Array(13).fill().forEach((acc, index) => {
    buttons.push(moment({ hour: 8 + index }).format("h:mm A"));
    index !== 12 &&
      buttons.push(moment({ hour: 8 + index, minute: 30 }).format("h:mm A"));
  });
  const handleQuantity = (color) => {
    if (color === "red") {
      return setMotorcyclist(motorcyclist < 8 ? motorcyclist + 1 : 8);
    }
    else{
      handleReset(motorcyclist > 0 ? motorcyclist - 1 : 0)
      return setMotorcyclist(motorcyclist > 0 ? motorcyclist - 1 : 0);
    }
  };
  const handleReset = (number) => {
    console.log(number);
    if (number===0) {
      setDisabled(true);
    }
  };
  return (
    <NewBox>
      <h1>Free Motorcyclist: {motorcyclist}</h1>
      <WrapperButtons>
        {buttons.map((button, index) => {
          return (
            <ScheduleButton
              key={index}
              hour={button}
              handleQuantity={handleQuantity}
              isDisabled = {disabled}
            ></ScheduleButton>
          );
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

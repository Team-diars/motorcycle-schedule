import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { ScheduleButton } from "../Button/ScheduleButton";

export const Box = () => {
  const [motorcyclist, setMotorcyclist] = useState(8);
  const [disabled, setDisabled] = useState(false);
  const buttons = [];

  //In here we get the time starting at 8 + index (every iteration)
  //the second push is to get the half hour. e.g: 8:30 , 9:30 , 10:30
  new Array(13).fill().forEach((acc, index) => {
    let hour = moment({ hour: 8 + index }).format("h:mm A")
    let half_hour = moment({ hour: 8 + index, minute: 30 }).format("h:mm A")
    buttons.push(hour);
    (index !== 12) && buttons.push(half_hour); // Skip the last element which is 8:30
  });

  const handleQuantity = (color) => {
    const sum_motorcyclist = motorcyclist < 8 ? motorcyclist + 1 : 8
    const reduce_motorcyclist = motorcyclist < 8 ? motorcyclist - 1 : 8
    if (color === "#7B252A") {
      handleReset(sum_motorcyclist)
      return setMotorcyclist(motorcyclist < 8 ? motorcyclist + 1 : 8);
    }else{
      handleReset(reduce_motorcyclist)
      return setMotorcyclist(motorcyclist > 0 ? motorcyclist - 1 : 0);
    }
  };

  const handleReset = (motorcyclist_number) => {
    return (motorcyclist_number === 0) ? setDisabled(true) : setDisabled(false); 
  };

  return (
    <NewBox className="d-flex justify-content-center flex-column align-items-center">
      <Title className="mt-3">Free Motorcyclist: {motorcyclist}</Title>
      <WrapperButtons className="d-flex flex-row flex-wrap justify-content-center">
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

const Title = styled.h1 `
  @media (max-width:480px){
    font-size:18px;
  }
`;

const NewBox = styled.div`
height:100vh;
width:50vw;
`;
const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

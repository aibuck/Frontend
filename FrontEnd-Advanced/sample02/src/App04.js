import React from "react";
import styled from "styled-components";

// 이미지를 넣고 싶다면 어떻게 해야 할까?
const Circle = styled.div`
  width: 250px;
  height: 250px;
  background-color: #000000;
  border-radius: 50%;
`;
const ColoredCircle = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "black")};
  border-radius: 50%;
`;

function App04() {
  return (
    <>
      <Circle />
      <ColoredCircle />
      <ColoredCircle bgColor="red" />
    </>
  );
}

export default App04;

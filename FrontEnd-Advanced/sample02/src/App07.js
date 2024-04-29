import React from "react";
import styled from "styled-components";

const Para = styled.p`
  background-color: red;

  @media screen and (max-width: 800px) {
    background-color: green;
  }

  @media screen and (max-width: 500px) {
    background-color: blue;
  }
`;

function App07() {
  return <Para>색깔이 바뀌는지 한번 보자!</Para>;
}

export default App07;

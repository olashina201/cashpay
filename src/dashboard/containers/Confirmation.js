import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 300px;
  height: 60px;
  background-color: blue;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
`;

const Text = styled.div`
  color: white;
`;

function Confirmation() {
  return (
    <Container>
      <Circle>Done!</Circle>
      <Text>transaction successful</Text>
    </Container>
  );
}

export default Confirmation;

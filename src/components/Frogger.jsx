import React, { useEffect } from "react";
import World from "./World";
import styled from "styled-components";
import Inputs from "./Inputs";

export default function Frogger() {
  return (
    <Container>
      <World />
      <Inputs/>
    </Container>
  );
}

const Container = styled.div`
`;

import React from "react";
import styled from "styled-components";
import Landscape from "./Landscape";
import Frog from "./Frog";

export default function World() {
  return (
    <WorldStyle>
      <Landscape />
      <Frog />
    </WorldStyle>
  );
}

const WorldStyle = styled.div`
  width: 700px;
  margin: 0 auto;
  position: relative;
`;

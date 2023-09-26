import React from "react";
import styled from "styled-components";

export default function Tile({ color }) {
  return <TileStyle color={color}></TileStyle>;
}

const TileStyle = styled.div`
  background-color: ${(props) => props.color};
  width: calc(100% / 9);
  display: inline-block;
  aspect-ratio: 3/2;
  box-sizing: border-box;
  border: 2px solid goldenrod;
`;

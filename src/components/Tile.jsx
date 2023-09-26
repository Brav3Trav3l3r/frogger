import React from "react";
import styled from "styled-components";
import { TILE_RATIO } from "../../utils/constants";

export default function Tile({ color, coordinates }) {
  return <TileStyle ratio={TILE_RATIO} color={color}></TileStyle>;
}

const TileStyle = styled.div`
  background-color: ${(props) => props.color};
  width: calc(100% / 9);
  display: inline-block;
  aspect-ratio: ${(props) => props.ratio};
  box-sizing: border-box;
  border: 1px dashed goldenrod;
`;

import React from "react";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import { WORLD_SIZE, TILE_RATIO } from "../../utils/constants";
import { frogState } from "../store/atoms";

export default function Frog() {
  const [frog, setFrog] = useRecoilState(frogState);

  const xOffset = (700 / WORLD_SIZE) * frog.x;
  const yOffset = ((700 / WORLD_SIZE) * frog.y) / TILE_RATIO;

  return (
    <FrogStyle ratio={TILE_RATIO} x={xOffset} y={yOffset}>
      <img src="/assets/idle-frog.png" alt="" />
    </FrogStyle>
  );
}

const FrogStyle = styled.div`
  position: absolute;
  z-index: 100;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  width: calc(100% / 9);
  box-sizing: border-box;
  aspect-ratio: ${(props) => props.ratio};

  img {
    rotate: 180deg;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

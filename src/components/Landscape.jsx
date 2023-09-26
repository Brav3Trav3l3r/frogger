import React from "react";
import Tile from "./Tile";
import { WORLD_SIZE } from "../../utils/constants";
import { grass, road, water } from "../../utils/images";
import styled from "styled-components";

export default function Landscape() {
  const tiles = [];

  for (let i = 0; i < WORLD_SIZE; i++) {
    if (i === 0 || i === 4 || i === 8) {
      tiles.push(Array(WORLD_SIZE).fill("grass"));
    } else if (i === 5 || i === 6 || i === 7) {
      tiles.push(Array(WORLD_SIZE).fill("road"));
    } else if (i === 1 || i === 2 || i === 3) {
      tiles.push(Array(WORLD_SIZE).fill("water"));
    }
  }

  return (
    <LandscapeStyle>
      {tiles.map((row, y) => (
        <Layer key={y}>
          {row.map((tile, x) => {
            let color;
            let coordinates = { y: y, x: x };

            switch (tile) {
              case "grass":
                color = "#86FF01";
                break;
              case "road":
                color = "#010001";
                break;
              case "water":
                color = "#2FFFCD";
                break;
            }

            return (
              <Tile key={`${x}${y}`} color={color} coordinates={coordinates} />
            );
          })}
        </Layer>
      ))}
    </LandscapeStyle>
  );
}

const LandscapeStyle = styled.div`
  background-color: rgb(128, 109, 129);
`;

const Layer = styled.div`
  display: flex;
`;

import React from "react";
import Tile from "./Tile";
import { WORLD_SIZE } from "../../utils/constants";
import { grass, road, water } from "../../utils/images";
import styled from "styled-components";
import { uid } from "../../utils/helperFunctions";

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
      {tiles.map((row) => (
        <Layer>
          {row.map((tile) => {
            let id = uid();
            let color;
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
            return <Tile key={id} color={color} />;
          })}
        </Layer>
      ))}
    </LandscapeStyle>
  );
}

const LandscapeStyle = styled.div`
  background-color: rgb(128, 109, 129);
  width: 700px;
  margin: 0 auto;
`;

const Layer = styled.div`
  display: flex;
`;

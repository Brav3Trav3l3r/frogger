import React from "react";
import styled from "styled-components";

export default function Button({ children, dir, onClick }) {
  let row;
  let col;
  switch (dir) {
    case "up":
      row = 1;
      col = 2;
      break;
    case "down":
      row = 2;
      col = 2;
      break;
    case "left":
      row = 2;
      col = 1;
      break;
    case "right":
      row = 2;
      col = 3;
      break;
  }

  return (
    <ButtonStyle row={row} col={col}>
      <button onClick={onClick}>{children}</button>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  text-align: center;
  padding: 0.5rem;
  width: 60px;

  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};
`;

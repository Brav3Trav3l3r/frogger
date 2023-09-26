import React, { useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { frogState } from "../store/atoms";
import styled from "styled-components";
import { MoveUp, MoveDown, MoveLeft, MoveRight } from "lucide-react";
import Button from "./Button";

export default function Inputs() {
  const [frog, setFrogState] = useRecoilState(frogState);

  const handleClick = useCallback(
    (e) => {
      switch (e.keyCode) {
        case 37:
          if (frog.x > 0) {
            const frogSnap = { ...frog };
            frogSnap.x--;
            setFrogState(frogSnap);
          }
          break;
        case 38:
          if (frog.y > 0) {
            const frogSnap = { ...frog };
            frogSnap.y--;
            setFrogState(frogSnap);
          }
          break;
        case 40:
          if (frog.y < 8) {
            const frogSnap = { ...frog };
            frogSnap.y++;
            setFrogState(frogSnap);
          }
          break;
        case 39:
          if (frog.x < 8) {
            const frogSnap = { ...frog };
            frogSnap.x++;
            setFrogState(frogSnap);
          }
          break;
      }
    },
    [frog]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleClick);
    return () => window.removeEventListener("keydown", handleClick);
  }, [handleClick]);

  //   const handleClick = (e) => {
  //     let target = e.target.value;

  //     switch (target) {
  //       case "left":
  //         if (frog.x > 0) {
  //           const frogSnap = { ...frog };
  //           frogSnap.x--;
  //           setFrogState(frogSnap);
  //         }
  //         break;
  //     }
  //     console.log(e.target.vaule);
  //   };

  return (
    <ButtonsGroup>
      <Button onClick={() => handleClick({ keyCode: 38 })} dir="up">
        <MoveUp />
      </Button>
      <Button onClick={() => handleClick({ keyCode: 40 })} dir="down">
        <MoveDown />
      </Button>
      <Button onClick={() => handleClick({ keyCode: 37 })} dir="left">
        <MoveLeft />
      </Button>
      <Button onClick={() => handleClick({ keyCode: 39 })} dir="right">
        <MoveRight />
      </Button>
    </ButtonsGroup>
  );
}

const ButtonsGroup = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2;
`;

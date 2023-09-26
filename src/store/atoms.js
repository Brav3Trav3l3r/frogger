import { atom } from "recoil";

export const frogState = atom({
  key: "frogState",
  default: {
    x: 4,
    y: 8,
  },
});

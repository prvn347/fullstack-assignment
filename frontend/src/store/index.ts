import { atom } from "recoil";
import { cardType } from "../types/cardTypes";

export const cardAtom = atom<cardType[]>({
  key: "cardAtom",
  default: [
    {
      title: "",
      description: "",
      link: "",
    },
  ],
});

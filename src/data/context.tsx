
import { createContext } from "react";
import { Character } from "../interfaces/character";

export type IDefaultContextState = {
  charData: Character[];
  setCharData: (characters: Character[]) => void;
}

export const initialContextState: IDefaultContextState = { 
    charData: [],
    setCharData: () => {}
};
export const GlobalContext = createContext(initialContextState); 
import {atom} from "recoil";

export const sampleState = atom<string>({
  key: "sampleState",
  default: "",
});

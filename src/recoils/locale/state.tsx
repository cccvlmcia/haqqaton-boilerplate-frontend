import {atom} from "recoil";
import {getStorage} from "../../utils/SecureStorage";

export const localeState = atom<string>({
  key: "localeState",
  // default: getStorage("locale") || "ko",
  default: "ko",
});

import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ICountry } from "../../types/country";

const { persistAtom: countryPersist } = recoilPersist({
  key: "countryLocal",
  storage: localStorage,
});

export const countryState = atom<ICountry[]>({
  key: "country",
  default: [],
  effects_UNSTABLE: [countryPersist],
});

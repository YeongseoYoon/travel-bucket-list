import { selector } from "recoil";
import { countryState } from "../atoms/atoms";

export const wantToVisitSelector = selector({
  key: "wantToVisitSelector",
  get: ({ get }) => {
    const countries = get(countryState);
    return countries.filter(
      (country) => country.category === "COUNTRIES_I_WANT_TO_VISIT"
    );
  },
});

export const willVisitSelector = selector({
  key: "willVisitSelector",
  get: ({ get }) => {
    const countries = get(countryState);
    return countries.filter(
      (country) => country.category === "COUNTRIES_I_WILL_VISIT"
    );
  },
});

export const haveVisitedSelector = selector({
  key: "haveVisitedSelector",
  get: ({ get }) => {
    const countries = get(countryState);
    return countries.filter(
      (country) => country.category === "COUNTRIES_I_HAVE_VISITED"
    );
  },
});

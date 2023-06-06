import React from "react";
import { useSetRecoilState } from "recoil";
import { countryState } from "../../recoil/atoms/atoms";
import { Categories, ICountry } from "../../types/country";

function CountryList({ id, country, category }: ICountry) {
  const setCountries = useSetRecoilState(countryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setCountries((prevCountries: ICountry[]) => {
      const targetIndex = prevCountries.findIndex(
        (country) => country.id === id
      );
      const newCountry = { id, country, category: name as Categories };
      return [
        ...prevCountries.slice(0, targetIndex),
        newCountry,
        ...prevCountries.slice(targetIndex + 1),
      ];
    });
  };

  const renderCategoryButtons = () => {
    const categoryButtons = Object.values(Categories).map((categoryValue) => {
      if (category !== categoryValue) {
        return (
          <button key={categoryValue} name={categoryValue} onClick={onClick}>
            {categoryValue}
          </button>
        );
      }
      return null;
    });

    return categoryButtons;
  };
  return (
    <li>
      <span>{country}</span>
      {renderCategoryButtons()}
    </li>
  );
}
export default CountryList;

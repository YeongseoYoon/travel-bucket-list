export enum Categories {
  "COUNTRIES_I_WANT_TO_VISIT" = "COUNTRIES_I_WANT_TO_VISIT",
  "COUNTRIES_I_HAVE_VISITED" = "COUNTRIES_I_HAVE_VISITED",
  "COUNTRIES_I_WILL_VISIT" = "COUNTRIES_I_WILL_VISIT",
}
export interface ICountry {
  id: number;
  country: string;
  category: Categories;
}

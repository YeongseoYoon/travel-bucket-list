import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { countryState } from "../../recoil/atoms/atoms";
import { ErrorMessage } from "./CountryForm.styled";
import { IFormData } from "../../types/countryform";
import { Categories, ICountry } from "../../types/country";

function CountryForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>();

  const setContries = useSetRecoilState(countryState);
  const onSubmit = ({ country }: IFormData) => {
    setContries((prevCountries: ICountry[]) => [
      {
        id: Date.now(),
        country,
        category: Categories.COUNTRIES_I_WANT_TO_VISIT,
      },
      ...prevCountries,
    ]);
    setValue("country", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("country", { required: "😡 Required!" })} />
        <ErrorMessage>{errors?.country?.message}</ErrorMessage>
      </div>
      <div>
        <button type="submit">가자!</button>
      </div>
    </form>
  );
}

export default CountryForm;

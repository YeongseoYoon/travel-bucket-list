import { useRecoilValue } from "recoil";
import CountryForm from "../components/CountryForm/CounrtryForm";
import CountryList from "../components/CountryList/CountryList";
import {
  haveVisitedSelector,
  willVisitSelector,
  wantToVisitSelector,
} from "../recoil/selectors/selectors";

function Home() {
  const wantToVisitCountries = useRecoilValue(wantToVisitSelector);
  const haveVisitedCountries = useRecoilValue(haveVisitedSelector);
  const willVisitCountries = useRecoilValue(willVisitSelector);

  return (
    <div>
      <h1>내가 가고싶은 나라들</h1>
      <CountryForm />
      <ul>
        {wantToVisitCountries?.map((country) => (
          <CountryList key={country.id} {...country} />
        ))}
      </ul>
      <h1>내가 가본 나라들</h1>
      <ul>
        {haveVisitedCountries?.map((country) => (
          <CountryList key={country.id} {...country} />
        ))}
      </ul>
      <h1>내가 갈 예정인 나라들</h1>
      <ul>
        {willVisitCountries?.map((country) => (
          <CountryList key={country.id} {...country} />
        ))}
      </ul>
    </div>
  );
}

export default Home;

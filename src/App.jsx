import { Header } from "./components/Header/index";
import { LookupTable } from "./components/LookupTable";
import { SearchAnime } from "./components/SearchAnime";
import { Summary } from "./components/Summary";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Summary />
      <LookupTable />
      <SearchAnime />
      <GlobalStyle />
    </>
  );
}

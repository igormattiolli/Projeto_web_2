import { Header } from "./components/Header/index";
import { LookupTable } from "./components/LookupTable";
import { SearchAnime } from "./components/SearchAnime";
import { Summary } from "./components/Summary";
import { GlobalStyle } from "./styles/global";
import { Register } from "./pages/Register";
export function App() {
  return (
    <>
      <Header />
      <Register />
      <GlobalStyle />
    </>
  );
}

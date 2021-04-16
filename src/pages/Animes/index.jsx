import { LookupTable } from "../../components/LookupTable";
import { SearchAnime } from "../../components/SearchAnime";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Animes() {
  return (
    <>
      <Container>
        <Header />
        <LookupTable />
        <SearchAnime />
      </Container>
    </>
  );
}

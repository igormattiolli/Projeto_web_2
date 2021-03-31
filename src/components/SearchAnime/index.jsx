import { Container } from "./styles";
import { useState } from "react";
import axios from "axios";

export function SearchAnime() {
  const [animes, setAnimes] = useState([]);
  const [searchAnime, setSearchAnime] = useState();
  async function setAnime() {
    await axios
      .get(`https://animechan.vercel.app/api/quotes/anime?title=${searchAnime}`)
      .then((res) => {
        setAnimes(res.data);
      });
  }
  return (
    <Container>
      <button onClick={setAnime}>Procurar anime</button>
      <input
        placeholder="Insira o nome do anime"
        value={searchAnime}
        onChange={(event) => {
          setSearchAnime(event.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Anime</th>
            <th>Personagem</th>
            <th>Citação</th>
          </tr>
        </thead>
        <tbody>
          {animes.map((anime) => (
            <tr>
              <td>{anime.anime}</td>
              <td>{anime.character}</td>
              <td>{anime.quote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

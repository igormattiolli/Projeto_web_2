import { Container } from "./styles";
import { useState } from "react";
import axios from "axios";
export function LookupTable() {
  const [animes, setAnimes] = useState([]);
  async function setAnime() {
    await axios.get("https://animechan.vercel.app/api/quotes").then((res) => {
      setAnimes(res.data);
    });
  }
  return (
    <Container>
      <button onClick={setAnime}>Gerar animes</button>
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

import { Container } from "./styles";
import { useState } from "react";
import { api } from "../../service/api";

export function SearchAnime() {
  const [users, setUsers] = useState([]);
  async function setAllUsers() {
    await api.get("users/list").then((response) => {
      console.log(response.data);
      setUsers(response.data)
    });
  }
  return (
    <Container>
      <button onClick={setAllUsers}>Listar Usuário</button>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

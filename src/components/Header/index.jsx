import { Link } from "react-router-dom";
import { Container, ContainerButton, ContainerList } from "./styles";
import { FiSearch } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ricoLogo from "../../assets/imageRicoLogo.png";

export function Header() {
  return (
    <Container>
      <ContainerList>
        <img src={ricoLogo} alt="logo da rico" />
        <ul>
          <li>Conheça</li>
          <li>Invista</li>
          <li>Aprenda</li>
          <li>Ferramentas</li>
          <li className="simulador">Simuladores</li>
          <li>Mais</li>
        </ul>
      </ContainerList>
      <ContainerButton>
        <FiSearch
          size={28}
          color="#ff2900"
          style={{ marginTop: 7, marginRight: 19 }}
        />
        <AiOutlineQuestionCircle
          size={28}
          color="#ff2900"
          style={{ marginTop: 7, marginRight: 19 }}
        />
        <div>
          <Link to="/register">
            <button className="register">Cadastre-se</button>
          </Link>
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        </div>
      </ContainerButton>
    </Container>
  );
}

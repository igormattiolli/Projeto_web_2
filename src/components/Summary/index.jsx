import { Container, FABbutton } from "./styles";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export function Summary() {
  return (
    <main>
      <Container>
        <div>
          <h1>
            Na Rico, a corretagem é<strong> ZERO </strong>
            pra você investir em
            <strong> Ações, BDRs e Fundos Imobiliários.</strong>
          </h1>
          <button>Abra sua conta</button>
        </div>
      </Container>
      <FABbutton>
        <AiOutlineQuestionCircle size={35} color="#fff" />
      </FABbutton>
    </main>
  );
}

import {Container, ContainerForm, ContainerTitle} from "./styles"

export function Login(){
    return (
    <Container>
        <ContainerTitle>

        <h1>
            Para acompanhar seus investimentos, ter acesso aos 
            nossos produtos e serviços, faça o seu login
        </h1>
        
        </ContainerTitle>
        <ContainerForm>
        <input type = "email" placeholder="E-mail"/>
        <input type = "password" placeholder="Senha"/>
        
        <button className="login">Entrar</button>
      </ContainerForm>
    </Container>
    );
}
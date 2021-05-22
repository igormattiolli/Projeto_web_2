import styled from "styled-components";

export const Container = styled.form``;
export const ContainerTitle = styled.div`
  background-color: var(--blue);
  height: 256px;
  background-size: cover;
  padding-top: 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  h1 {
  color: var(--white);
  font-weight: 750;
  font-size: 1.3rem;
  max-width: 400px;
  margin: auto;
  }
  
`;

export const ContainerForm = styled.div`
  height: 350px;
  max-width: 300px;
  margin: auto;
  background-color: var(--white);
  input{
    margin-top: 2rem;
    background-color: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 0.4rem;
    padding: 0 1.5rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--white);
    }
    
  button {
    margin: 1rem 3.5rem;
    border: 2px solid transparent;
    font-size: 0.875rem;
    font-weight: 1000;
    border-radius: 0.5rem;
    width: 130px;
    height: 45px;
    font-family: freight-sans-pro, Arial, sans-serif;
    cursor: pointer;
    }

  .login {
    background-color: var(--blue);
    color: var(--white);

    transition: 0.2s;
    &:hover {
      background-color: var(--white);
      color: #4d4d4d;
    }
  }

  p {
    color: var(--orange-type2);
    margin: 0 auto;
    width: 160px;
  }
  `;

  export const ErroMessage = styled.p`
  color: var(--orange-type2);
  margin: 0 auto;
  width: 240px;
  `;


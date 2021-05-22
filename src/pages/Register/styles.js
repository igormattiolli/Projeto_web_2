import styled from "styled-components";

export const Container = styled.form`
  padding-top: 100px;
  div {
    background: var(--blue-header-desktop);
    max-width: 300px;
    margin: auto;
    height: 400px;
    display: grid;
    justify-content: center;
    h3 {
      color: var(--orange-type2);
      font-size: 1.5rem;
      margin: auto;
    }
    input {
      border: 1px solid var(--white);
      border-radius: 0.4rem;
      padding: 0 1.5rem;
      height: 2rem;
      font-size: 1rem;
      font-weight: 400;
      margin: auto;
    }

    button {
      background-color: var(--orange-button);
      height: 2rem;
      width: 80%;
      padding: 0 1.5rem;
      border-radius: 0.4rem;
      color: var(--white);
      font-weight: 300;
      cursor: pointer;
      border: 1px solid var(--orange-button);
      margin: auto;
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

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  button {
    border: 2px solid transparent;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 0.5rem;
    width: 130px;
    height: 45px;
    font-family: freight-sans-pro, Arial, sans-serif;
    cursor: pointer;
    background-color: var(--orange-type2);
    color: var(--white);
    margin: 1rem 0;
  }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--grey);
      line-height: 1.5rem;
      text-align: left;
      padding: 1rem;
      font-weight: 600;
    }
    td {
      background-color: #f0f2f5;
      color: var(--grey);
      font-weight: 300;
      padding: 1rem;
      border: 0;
      box-shadow: 1;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 66px;
  background-color: rgba(10, 7, 66, 0.9);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;
export const ContainerList = styled.div`
  ul {
    margin: 1.4rem 8rem;
    max-width: 700px;

    li {
      display: inline-block;
      position: relative;
      left: 10px;
      font-weight: 900;
      font-size: 0.79rem;
      margin-left: 2.9rem;
      font-style: normal;
      color: #fff;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      :nth-child(6) {
        display: none;
      }

      :before {
        content: "";
        display: block;
        float: left;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
        margin: 8px 6px 0 0;
      }
    }
    .simulador {
      color: #f32404;
      font-size: 13px;
      font-style: normal;
      font-weight: 1000;
    }
    .simulador:before {
      content: "";
      display: block;
      float: left;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #f32404;
      margin: 8px 6px 0 0;
    }
  }
  img {
    width: 72px;
    height: auto;
    display: block;
    float: left;
    position: absolute;
    top: 10px;
    left: 1.9rem;
  }
`;

export const ContainerButton = styled.div`
  margin: 11px 0;
  padding: 0 1.25rem;
  display: flex;
  button {
    border: 2px solid transparent;
    font-size: 0.875rem;
    font-weight: 1000;
    border-radius: 0.5rem;
    width: 130px;
    height: 45px;
    font-family: freight-sans-pro, Arial, sans-serif;
    cursor: pointer;
  }
  .register {
    background-color: var(--orange-button);
    color: var(--white);
    margin-right: 0.5rem;
    overflow: hidden;
  }
  .login {
    background-color: transparent;
    color: var(--white);

    transition: 0.2s;
    &:hover {
      background-color: var(--white);
      color: #4d4d4d;
    }
  }
`;

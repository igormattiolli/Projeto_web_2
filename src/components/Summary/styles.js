import styled from "styled-components";
import imageDesktop from "../../assets/imageDesktop.jpg";
export const Container = styled.div`
  background-image: url(${imageDesktop});
  height: 556px;
  background-position: 50%;
  right: 0;
  background-size: cover;
  div {
    padding: 200px 20px 20px;
    max-width: 800px;
    margin: 0 1rem;
    h1 {
      color: var(--white);
      font-weight: 750;
      font-size: 2.3rem;
      strong {
        color: var(--orange-writing);
        font-weight: 1000;
      }
    }
    button {
      color: #fff;
      border: 1px solid #f45204;
      background: #f45204;
      border-radius: 24px;
      padding: 16px 24px 16px 24px;
      display: inline-block;
      cursor: pointer;
      margin-top: 30px;
      font-size: 15px;
    }
  }
`;

export const FABbutton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1rem;
  background-color: var(--orange-type2);
  padding: 0.8rem;
  padding-bottom: 0.7rem;
  border-radius: 50%;
`;

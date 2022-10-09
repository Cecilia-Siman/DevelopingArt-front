import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #221f4c;
    font-family: "Nunito", sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 30px;
    margin: 20px 0px 0px 0px;
  }
  p {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: #221f4c;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const FormStyle = styled.div`
  margin-top: 52px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin-bottom: 10px;
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 12px;
    &::placeholder {
      font-family: "Nunito", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #000000;
      opacity: 0.5;
    }
  }
  button {
    width: 318px;
    height: 45px;
    background: #e89d9f;
    border-radius: 4.63636px;
    margin-bottom: 24px;
    color: #ffffff;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    &:hover {
      cursor: pointer;
    }
  }
`;

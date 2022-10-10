import styled from "styled-components";

const Container = styled.div`
  background-color: #e0b3a5;
  width: 200px;
  height: 398px;
  display: flex;
  border-radius: 5px;
  margin-left: 100px;
  padding: 3px 10px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  p,
  h3 {
    color: #221f4c;
    font-family: "Nunito", sans-serif;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin: 24px 0px 5px 0px;
  }
  h3 {
    font-style: bold;
    font-weight: 700;
    font-size: 30px;
    margin: 20px 0px 0px 0px;
    padding-bottom: 6px;
    border-bottom: 1px solid #b5363a;
  }
  input {
    outline: 0;
    border: 0;
    border-radius: 3px;
    width: 100%;
    :hover {
      cursor: pointer;
    }
  }

  input[type="range"] {
    display: block;
    width: 100%;
    background: blue;
  }

  .eraser{
    display:flex;
    width: 100%
    align-items: center;
    justify-content: center;
  }

  button {
    margin-top: 30px;
    width: 60px;
    border: 2px solid #221f4c;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    color: #221f4c;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    :hover {
      cursor: pointer;
      text-decoration: none;
    }
  }

  .eraserOn {
    background-color: #221f4c;
    color: #fff;
  }
`;

export default Container;

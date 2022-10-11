import styled from "styled-components";

export const Post = styled.div`
  //width: 200px;
  //height: 200px;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
  background-color: #e8b3a5;
  p {
    font-size: 18px;
    font-style: bold;
    font-weight: 700;
    color: #221f4c;
  }

  .canvas {
    width: 30px;
    height: 30px;
  }
  div {
    heigth: 100%;
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mobileCanvas {
    display: none;
  }
`;

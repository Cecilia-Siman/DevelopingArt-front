import styled from "styled-components";

export const Post = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  //background-color: #e8b3a5;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
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
    height: 120px;
    width: 120px;
    background-color: white;
    margin-bottom: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 612px) {
    width: 150px;
    height: 180px;
    div {
      height: 100px;
      width: 100px;
      margin-bottom: 10px;
    }
  }
`;

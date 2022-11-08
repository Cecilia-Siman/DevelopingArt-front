import styled from "styled-components";

export const CanvasBackground = styled.div`
  //background-color: #c0d1aa;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;

  padding: 20px;
  .canvas {
    //margin-left: 150px;
  }
  .sideBar {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-right: 100px;
    button {
      height: 50px;
      width: 150px;
      border-radius: 30px;
      border: 2px solid #221f4c;
      margin-bottom: 20px;
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
  }
  .canvas-container-mobile,
  .mobileToolBox {
    display: none;
  }
  @media (max-width: 612px) {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    .canvas {
    }
    .canvas-container-mobile,
    .mobileToolBox {
      display: flex;
    }
    .canvas-container-mobile {
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .sideBar {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
    .toolBox {
      display: none;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //margin-top: 100px;
  padding-top: 10px;
  input {
    font-family: "Nunito", sans-serif;
    font-size: 24px;
    background: transparent;
    box-sizing: border-box;
    text-align: center;
    color: #000;
    :hover {
      cursor: pointer;
    }
  }
`;

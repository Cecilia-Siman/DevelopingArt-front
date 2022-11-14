import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  scroll-behavior: smooth;
  h2 {
    color: #221f4c;
    font-size: 24px;
    font-style: bold;
    font-weight: 700;
    padding-top: 40px;
    margin-left: 60px;
  }
`;

export const Gallery = styled.div`
  box-sizing: border-box;
  overflow-x: scroll;
  width: 90%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
`;

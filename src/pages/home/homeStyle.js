import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

import styled from "styled-components";

export const TopBar = styled.div`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //background-color: #b5363a;
  //background-color: #221f4c;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h1 {
    font-style: bold;
    font-weight: 700;
    font-size: 30px;
    //color: #bac1d1;
    color: #221f4c;
    margin-left: 20px;
  }
  a {
    font-size: 30px;
    color: #221f4c;
    //color: #bac1d1;
  }
  .icon {
    margin-right: 20px;
  }

  @media (max-width: 612px) {
    h1 {
      font-style: bold;
      font-weight: 700;
      font-size: 24px;
      color: #bac1d1;
      margin-left: 8px;
    }
    div {
      font-size: 5px;
      color: #bac1d1;
    }
    .icon {
      font-size: 24px;
      margin-right: 10px;
    }
  }
`;

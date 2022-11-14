import styled from "styled-components";

export const Post = styled.div`
  width: 150px;
  height: 190px;
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
    margin-bottom: 5px;
  }
  span {
    color: #f9f9f9;
    font-size: 14px;
  }
  img {
    margin-bottom: 10px;
    margin-top: 10px;
    width: 120px;
    height: 120px;
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

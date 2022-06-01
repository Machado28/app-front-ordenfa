import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background: #ffffff;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    height: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const ContainerAllElements = styled.div`
  width: 100%;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

export const Title = styled.h1`
  width: 50%;
  font-size: 26px;
  color: green;
  font-weight: bold;
  text-align: center;

  :after {
    content: "";
    display: block;
    margin: auto;
    background-repeat: no-repeat;
    width: 105px;
    height: 17px;
    margin-top: 10px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    line-height: 1.5;
    font-size: 22px;
  }
`;

export const ContainerCard = styled.div`
  width: 85%;
  height: 482px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 10px;
  }
`;

export const Card = styled.div`
  width: 30%;
  height: 470px;
  color: #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px;
  background: #f8f8f8;

  @media screen and (max-width: 767px) {
    width: 95%;
    margin: 15px auto;
  }
`;

export const ContainterElements = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  width: 106px;
  height: 106px;
  background: #1d2434;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;

  :hover {
    background: pink;
    cursor: pointer;
    transition: 0.5s;
  }

  @media screen and (max-width: 767px) {
    font-size: 54px;
  }
`;

export const SubTitle = styled.p`
  font-size: 16px;
  color: #363636;
  font-weight: bold;

  :hover {
    color: pink;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #363636;
  text-align: center;
  line-height: 26px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1023px) {
    height: auto;
  }
`;

export const ContainerAllElements = styled.div`
  width: 100%;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1023px) {
    height: auto;
  }
`;

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 40px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #be8c4d;
  font-weight: bold;

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
    margin-top: 35px;
    font-size: 22px;
  }
`;

export const ContainerCads = styled.div`
  width: 85%;
  height: 475px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 10px;
    height: auto;
  }

  @media screen and (max-width: 567px) {
    flex-direction: column;
  }

  @media screen and (min-width: 568px) and (max-width: 1023px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 23%;
  height: 450px;
  transition: all 0.4s;

  @media screen and (max-width: 1023px) {
    margin: 15px auto;
    height: auto;
  }

  @media screen and (max-width: 567px) {
    width: 95%;
  }

  @media screen and (min-width: 568px) and (max-width: 1023px) {
    width: 45%;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 8px 16px 6px rgba(0, 0, 0, 0.3);
  }

  :hover .back {
    background: transparent;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 260px;
  background-size: cover;
`;

export const ContainerBackground = styled.div`
  width: 100%;
  height: 260px;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  transition: all 0.4s;

  :hover {
    cursor: pointer;
    background: transparent;
  }
`;

export const QuantClassificacoes = styled.div`
  font-size: 12px;
  color: #be8c4d;
  background: #ffffff;
  padding: 3px 7px;
  border-radius: 2px;
  font-weight: bold;
`;

export const ContainerDescription = styled.div`
  width: 100%;
  height: 210px;
  background: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Name = styled.a`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #363636;

  :hover {
    color: #be8c4d;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Location = styled.p`
  font-size: 13px;
  color: #898989;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const IconLocation = styled.p`
  font-size: 16px;
  color: #be8c4d;
`;

export const Stars = styled.div`
  width: 43%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconStar = styled.p`
  font-size: 16px;
  color: #be8c4d;
`;

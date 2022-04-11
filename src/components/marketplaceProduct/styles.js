import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1100px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
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
`;

export const ContainerAllElements = styled.div`
  width: 90%;
  height: 930px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    height: auto;
    width: 100%;
    padding: 10px;
    margin: 15px auto 25px;
  }

  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 23%;
  height: 446;
  border: 2px solid #ebebeb;
  transition: all 0.4s;

  @media screen and (max-width: 567px) {
    width: 95%;
    margin: 15px auto;
  }

  @media screen and (min-width: 568px) and (max-width: 1023px) {
    width: 45%;
    margin: 15px auto;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    border: 2px solid #be8c4d;
  }

  :hover .actionsProduct {
    visibility: visible;
    opacity: 1;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 247px;
  background-size: 200px 200px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContainerActionsProduct = styled.div`
  width: 100%;
  height: 252px;
  opacity: 0;
  visibility: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.3s;
`;

export const ContainerIcons = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.div`
  width: 40px;
  height: 34px;
  background: #be8c4d;
  font-size: 12px;
  padding: 9px 12px;
  border: none;
  margin-right: 8px;
  background: #ffffff;
  transition: all 0.3s;
  /* box-shadow: 0 14px 38px 12px rgb(0 0 0 / 18%); */

  :hover {
    background: #be8c4d;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ContainerActions = styled.div`
  width: 100%;
  height: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Actions = styled.button`
  background: #ffffff;
  color: #363636;
  padding: 10px 20px;
  border: none;
  margin-top: 10px;
  font-weight: bold;
  font-size: 12px;
  font-family: Montserrat;
  transition: all 0.4s;
  box-shadow: 0 14px 38px 12px rgb(0 0 0 / 18%);

  :hover {
    background: #be8c4d;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ContainerDescricao = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
`;

export const Descricao = styled.p`
  font-size: 15px;
  font-weight: bold;

  :hover {
    color: #be8c4d;
  }
`;

export const Preco = styled.p`
  color: #be8c4d;
  font-size: 15px;
  padding: 12px;
`;

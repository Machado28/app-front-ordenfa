import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 70px auto 75px;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  width: 30%;
  height: 510px;
  order: 1;

  @media screen and (max-width: 767px) {
    order: 2;
    width: 70%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    order: 2;
    width: 80%;
    height: 600px;
  }
`;

export const CardBrown = styled.div`
  width: 100%;
  height: 510px;
  background: #be8c4d;
  position: relative;
  z-index: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 510px;
  background: url("https://novonegocio.com.br/wp-content/uploads/2012/05/como-abrir-uma-barbearia-2-1200x900.jpg");
  background-size: cover;
  position: relative;
  z-index: 1px;
  bottom: 445px;
  left: 70px;

  @media screen and (max-width: 767px) {
    bottom: auto;
    left: auto;
  }
`;

export const BorderComponent = styled.div`
  width: 100%;
  height: 500px;
  border: 2px solid #ffffff;
  position: relative;
  z-index: 2px;
  bottom: 985px;
  left: 30px;
  background: transparent;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ContainerDescription = styled.div`
  width: 35%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
  order: 2;

  @media screen and (max-width: 767px) {
    order: 1;
    width: 90%;
    margin: 0;
    margin-bottom: 35px;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #be8c4d;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #363636;
  text-align: justify;
  line-height: 26px;
`;

export const Assinatura = styled.p`
  font-size: 16px;
  font-family: Lobster;
`;

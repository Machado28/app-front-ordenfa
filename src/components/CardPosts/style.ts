import styled from "styled-components";

export const ContainerCardPosts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Bloco = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  background: #ebe8de;
  height: 490px;
  text-decoration: none;
  width: 32.333333%;
  transition: all 0.3s;

  @media screen and (max-width: 567px) {
    width: 95%;
    margin: 15px auto;
  }

  @media screen and (min-width: 568px) and (max-width: 1023px) {
    width: 45%;
    margin: 15px auto 25px;
  }

  div {
    width: 100%;
    height: 300px;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    :hover {
      cursor: pointer;
    }
  }

  article {
    width: 83.5%;
    height: 50px;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 26px;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 10px 10px;
    border-radius: 5px;
    z-index: 100;

    p {
      color: #363636;
      margin-left: 8px;
      font-size: 12px;

      :hover {
        color: #be8c4d;
        cursor: pointer;
      }
    }

    span {
      width: 12px;
      height: 12px;
      color: #be8c4d;
      margin-left: 3px;
      font-size: 12px;
    }
  }

  :hover {
    box-shadow: 0 14px 38px 12px rgb(0 0 0 / 18%);
    transform: scale(1.03);
  }
`;

export const TextPost = styled.div`
  width: 100%;
  max-width: 365px;
  height: 300px;
  display: flex;
  padding: 40px 20px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #000000;

  h1 {
    font-size: 18px;
    :hover {
      color: #be8c4d;
    }
  }
  p {
    line-height: 35px;
    font-size: 16px;
    color: #898989;
    margin-top: 20px;
  }
`;

export const Foto = styled.img``;

export const ContainerBlocos = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Blocos = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media screen and (max-width: 786px) {
    flex-wrap: wrap;
  }
`;

export const HeaderCardPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  h1 {
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
  }
`;

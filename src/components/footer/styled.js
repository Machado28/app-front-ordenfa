import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  background: #111111;
  padding: 40px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    padding: 15px 20px;
  }
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Contact = styled.div``;

export const Session1 = styled.div`
  width: 100%;
  margin: 30px auto 30px;

  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px auto;
  }
`;
export const Session2 = styled.div`
  font-size: 18px;
  width: 100%;
  border-top: 1px #233148 solid;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;

  article {
    color: #7c7c7c;
    font-size: 16px;
  }

  span {
    color: green;
  }

  div {
    width: 120px;
    display: flex;
    justify-content: space-between;
  }

  p {
    color: #7c7c7c;
    font-size: 16px;

    :hover {
      color: #0a8314;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 767px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;

    article {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  h2 {
    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #101720;

    input {
      width: 100%;
      outline: 0;
      background: none;
      border: none;
      padding: 10px 18px;
      color: #fff;
      font-size: 16px;
      height: 100%;
    }

    button {
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      padding: 15px 20px;
      background: none;
      background: green;
      border: none;
      border: 1px solid #0a0f17;

      :hover {
        border: 1px solid #fff;
      }
    }
  }

  p {
    color: #7c7c7c;
    font-size: 16px;
    line-height: 52px;
  }
`;

export const CardFooter = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;

  @media screen and (max-width: 767px) {
    border-bottom: 1px solid #7c7c7c;
    padding-bottom: 10px;
  }

  h2 {
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    color: #7c7c7c;
    font-size: 16px;
    line-height: 40px;

    :hover {
      cursor: pointer;
      color: #fff;
    }
  }
`;

export const Description = styled.h1``;

export const ContactoLogo = styled.div`
  width: 100%;

  @media screen and (max-width: 767px) {
    border-bottom: 1px solid #7c7c7c;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  div {
    margin-top: 30px;
  }

  h1 {
    font-size: 30px;
    color: #0a8314;
    font-family: Lobster;
    letter-spacing: 0px;

    :hover {
      cursor: pointer;
    }
  }

  h2 {
    color: #fff;
    font-size: 26px;
    font-family: sans-serif;
  }

  p {
    line-height: 30px;
    font-size: 16px;
    color: #7c7c7c;
  }

  span {
    color: #0a8314;
    font-size: 26px;
  }

  @media screen and (max-width: 767px) {
    div {
      margin: 0;
    }
  }
`;

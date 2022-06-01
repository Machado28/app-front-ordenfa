import styled from 'styled-components';

export const ConatinerFundoLoginCadastrar = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #fff 50%, #fff 50%);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform:translateY(170px);
`;

export const LigarPages = styled.a`
  margin-left: 3px;
  color: green;
  font-weight: 700;
  text-decoration: none;
`;

export const Session2 = styled.div``;

export const FooterModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
  color: #6d7175;

  li {
    cursor: pointer;
    margin: 0 10px;
    list-style: none;
  }
`;

export const HeaderModal = styled.div`
  width: 100%;
  h2 {
    color: #3e3b56;
    font-size: 22px;
  }
  p {
    color: #6d7175;
    font-size: 17px;
  }
`;

export const Modal = styled.div`
  background: #fff;
  padding: 20px 35px;
  width: 550px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 7px;
  h1 {
    font-family: Lobster;
    color: #be8c4d;
    font-size: 40px;
  }
  form {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: -10px;
    input {
      font-size: 17px;
      height: 10px;
      width: 440px;
      display: flex;
      align-items: center;
    }
    label {
      font-size: 15px;
    }

    legend {
      font-size: 13px;
    }
  }

  h1 {
    color: green;
    font-size: 30px;
  }
`;

export const Imagem = styled.div`
  width: 600px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const ButtonELink = styled.div`
  margin-top: 13px;
  margin-left: 10px;

  div {
    display: flex;
    font-size: 15px;
    margin-top: 20px;

    p {
      color: #6d7175;
    }
  }
  button {
    background: none;
    border: none;
    background: green;
    padding: 15px 40px;
    font-size: 17px;
    color: #fff;
    cursor: pointer;
  }
`;

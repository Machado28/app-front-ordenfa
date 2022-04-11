import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #dedede;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export const Services = styled.div`
  width: 330px;
  height: 134px;
  color: #363636;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 23px;

  @media screen and (max-width: 767px) {
    height: 150px;
  }
`;

export const Icons = styled.p`
  width: 32.5px;
  height: 27px;
  color: #363636;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;

  :hover {
    color: #be8c4d;
  }

  @media screen and (max-width: 767px) {
    font-size: 38px;
  }
`;

export const Description = styled.h3`
  color: #363636;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  :hover {
    color: #be8c4d;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin: 25px auto 10px;
  }
`;

export const Precos = styled.p`
  color: #898989;
  font-size: 11px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    text-align: center;
  }
`;

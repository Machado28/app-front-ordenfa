import styled from "styled-components";

export const Button = styled.button`
  width: 181.83px;
  height: 53px;
  font-size: 15px;
  font-weight: bold;
  padding: 14px 30px;
  margin: auto 5px;
  font-family: "Century Gothic";
  letter-spacing: 1px;
  border: ${(props) =>
    props.color === "reserve" ? "2px solid #ffffff" : "2px solid #be8c4d"};
  background: ${(props) =>
    props.color === "reserve" ? "#be8c4d" : "transparent"};
  color: ${(props) =>
    props.color === "reserve-salon" ? "#be8c4d" : "#ffffff"};
  transition: 0.5s;
  :hover {
    background: ${(props) =>
      props.color === "reserve" ? "transparent" : "#be8c4d"};
    border: ${(props) =>
      props.color === "know-more" ? "2px solid #ffffff" : "2px solid #be8c4d"};
    color: #ffffff;
    cursor: pointer;
    transition: 0.5s;
  }
  :hover .link {
    color: #ffffff;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #be8c4d;
`;

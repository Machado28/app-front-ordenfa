import styled from "styled-components";
import _Container from "./../Container/styled.js";
import _Nav from "./../nav/styled";
const _Header = styled.header`
  width: 100%;
  height: 130px;
  background-color: #fff;
  box-shadow: 1px 4px 2px #1f1f1f1f;
  display: flex;
  position: fixed;
  flex-direction: column;
`;
export default _Header;

const Top = styled.div`
  width: 100%;
  height: 40px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
      margin: 0 5vh 0;
      color: #fff;
      font-size: 14px;
    }
  }
`;

const NavTop = styled(_Nav)`
  li {
    a {
      color: #fff !important ;
      font-size: 14px;
    }
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
`;

const Container = styled(_Container)`
  align-items: center !important;
  background-color: #fff;
`;

export { Top, Logo, Container, NavTop };

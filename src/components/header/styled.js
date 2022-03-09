import styled from "styled-components";
import _Container from "./../Container/styled.js";
import _Nav from "./../nav/styled";

const _Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 1px 4px 16px #1f1f1f1f !important;
  display: flex;
  z-index:1 ;
  position: fixed;
  flex-direction: column;
  

  div {
    justify-content:space-between ;
    padding:0 12px;
    nav {
      li {
        display: none;
        @media screen and (max-width: 877px) {
          display: none;
        }
      }
    }
  }
`;
export default _Header;

const Top = styled.div`
  width: 100%;
  height: 30px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 877px) {
    height: 25px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
     
    @media screen and (max-width: 877px) {
     justify-content: space-evenly;
     width:100%;
    }

    li {
      margin: 0 5vh 0;
      color: #fff;
      font-size: 10px;
      
    }
  }
`;

const NavMobile = styled(_Nav)``;

const Logo = styled.img`
  width: 160px;
  height: 30px;
  @media screen and (max-width: 877px) {
    
  }
`;

const Container = styled(_Container)`
  align-items: center !important;
  background-color: #fff;
  @media screen and (max-width: 877px) {
  justify-content:space-between ;
  padding:6px;
  }
`;

export { Top, Logo, Container, NavMobile };

import styled from "styled-components";

import _Nav from "./../nav/styled";

const _Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #fff;
  box-shadow: 1px 4px 16px #1f1f1f1f !important;
  display: flex;
  z-index:1 ;
  position: fixed;
  flex-direction: column;
  margin-top: 12px;
`;
export default _Header;

const Top = styled.div`
  width: 100%;
  height: 10px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 877px) {
    height: 25px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content:flex-start;
     width: 100%;
     height:60px;
     background-color:green;
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
  width: 210px;
  height: 70px;
  @media screen and (max-width: 877px) {
    
  }
`;

const Container = styled.div`
  display:flex;
  align-items: center !important;
  justify-content:space-around;
  background-color: #fff;
  width:100%;
  height: 200px;
  @media screen and (max-width: 877px) {
  justify-content:space-between ;
  padding:6px;
  }
`;

export { Top, Logo, Container, NavMobile };

import styled from "styled-components";

import _Nav from "./../nav/styled";

const _Header = styled.header`
  width: 100%;
  height: 90px;
  background-color: #000;

  display: flex;
  z-index: 1;
  position: fixed;
  flex-direction: column;
  border-bottom: 3px solid #aaff99   !important;
   
`;
export default _Header;

const Top = styled.div`
  width: 100%;
  padding-top:12px;
  height:20px;
  background-color: #bbff99;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 877px) {
    height: 25px;
  }

  ul {
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
 
    background-color: green;
    @media screen and (max-width: 877px) {
      justify-content: space-evenly;
      width: 100%;
    }

    li {
      margin: 6px 5vh 0;
      color: #fff;
      font-size: 10px;
    }
  }
`;

const NavMobile = styled(_Nav)``;

const Logo = styled.img`
  width: 200px;
  height: 57px;
  @media screen and (max-width: 877px) {
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: space-around;
  background-color: #222;
  width: 100%;
  height:80px;
  
  @media screen and (max-width: 877px) {
    justify-content: space-between;
    padding: 6px;
  }
`;

export { Top, Logo, Container, NavMobile };

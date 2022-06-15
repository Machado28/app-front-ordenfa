import _Header, { Logo, Top, Container } from "./styled";
import logo from "./assets/img/logo.png";
import Nav, { NavMobile } from "./../nav/index";
import { Link } from "react-router-dom";
import data, { dataTop } from "./data";
import {FaHome} from 'react-icons/fa'
import { useState } from 'react';

const Header = () => {

  return (
    <_Header>
      <Top>
         
        <ul>
          {dataTop.map((item,index) => (
            <li key={index} >{item.title}</li>
          ))}
        </ul>
      </Top>
      <Container>
        <Logo src={logo} />
        <Nav id="nav-computer" data={data}></Nav>

        <Link id="link-inscricao" to="/inscricao">
         Cadastre-se Aqui
        </Link>
      </Container>
    </_Header>
  );
};
export default Header;

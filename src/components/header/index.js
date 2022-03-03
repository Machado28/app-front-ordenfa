import _Header, { Logo, Top, Container, } from "./styled";
import logo from "./assets/img/logo.png";
import Nav from "./../nav/index";
import {Link} from 'react-router-dom'
import data, { dataTop } from "./data";

const Header = () => {
  return (
    <_Header>
      <Top>
       <ul >
           {
            dataTop.map((item)=><li>{item.title}</li>)
           }
         </ul>
      </Top>
      <Container>
        <Logo src={logo} />
        <Nav data={data}></Nav>
        <Link id="link-inscricao" to="/inscricao">Inscricao</Link>
      </Container>
    </_Header>
  );
};
export default Header;

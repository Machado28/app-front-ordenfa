import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import * as S from "./styled";
import Logo from './logo/index'
const Footer = () => (
  <S.ContainerFooter>
    <S.Session1>
      <S.ContactoLogo>
        
        <Logo></Logo>
        <p>Profisssionalismo</p>
        <div>
          <h2>
            +244 <span>929 599 439</span>
          </h2>
          <p>ordenfa@gmail.com</p>
        </div>
      </S.ContactoLogo>
      <S.CardFooter>
        <h2>INFORMAÇÕES</h2>
        <p>Sobre nós</p>
        <p>Aplicativo</p>
        <p>Nossos Parceiros</p>
        <p>Novidades</p>
      </S.CardFooter>
      <S.CardFooter>
        <h2>EXPLORAR</h2>
        <p>Mapa de navegação</p>
        <p>Políticas</p>
        <p>Privacidade</p>
        <p>Licença</p>
      </S.CardFooter>
      <S.Newsletter>
        <h2>BOLETIM DE NOTÍCIAS</h2>
        <p>Inscreva-se agora para obter atualizações diárias</p>
        <div>
          <input type="text" placeholder="Seu endereço de email" />
          <button>Enviar</button>
        </div>
      </S.Newsletter>
    </S.Session1>
    <S.Session2>
      <article>
        Copyright © 2021 Todos os direitos reservados | Este modelo é feito{" "}
         pela ordefna
        <span> Ordenfa</span>
      </article>

      <div>
        <p>
          <FaTwitter />
        </p>
        <p>
          <FaFacebookF />
        </p>
        <p>
          <FaLinkedinIn />
        </p>
        <p>
          <FaInstagram />
        </p>
      </div>
    </S.Session2>
  </S.ContainerFooter>
);

export default Footer;

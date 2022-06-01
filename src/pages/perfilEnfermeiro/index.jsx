import { useEffect, useState } from "react";

// import { useRouter } from "next/router";

import * as S from "../../styles/stylePages/usuarioPerfil/styles";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineClockCircle,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

// import api from "../../modules/baseUrl/index";

import { RiFacebookFill } from "react-icons/ri";
import { GoCreditCard } from "react-icons/go";
import Header from "../../components/header";
import Footer from "../../components/footer";
// import GoogleMap from "../../components/map/index";
// import AgendarServices from "../../components/agendarServicos/index";
//import GaleriaPhotos from '../../components/galeriaPhotos/index'
// import Recomendacoes from "../../components/recomendacoes/index";

export default function PerfilEnfermeiro() {
  // // const Router = useRouter();
  // const { index } = Router.query;
  // console.log("A rota => =>", Router);

  const [agendar, setAgendar] = useState({ show: true });
  const [galeria, setGaleria] = useState({ show: false });
  const [recomendacoes, setRecomendacoes] = useState({ show: false });
  const [activeIndex, setActiveIndex] = useState("active");
  const [name, setnome] = useState("");

  async function PerfilSalon() {
    // const response = await api.get(`/inscricao${}/${index}`);
    // const { name } = response.data;
    // setnome(name);
  }

  useEffect(() => {
    PerfilSalon();
  }, []);

  function handleOnClick() {
    setActiveIndex("");
  }

  const handleAgendar = () => {
    setAgendar({ show: true });
    setGaleria({ show: false });
    setRecomendacoes({ show: false });
  };

  const handleGaleria = () => {
    setAgendar({ show: false });
    setGaleria({ show: true });
    setRecomendacoes({ show: false });
  };

  const handleRecomendacoes = () => {
    setAgendar({ show: false });
    setGaleria({ show: false });
    setRecomendacoes({ show: true });
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.NavBarSalon>
          <S.Container>
            <S.BarbeariaName>{name}</S.BarbeariaName>
            <S.Location>Maianga / Luanda / Angola</S.Location>
            <S.ContainerItems>
              <S.ContainerStars>
                <S.IconStars>
                  <S.Star>
                    <AiFillStar />
                  </S.Star>

                  <S.Star>
                    <AiFillStar />
                  </S.Star>

                  <S.Star>
                    <AiFillStar />
                  </S.Star>

                  <S.Star>
                    <AiFillStar />
                  </S.Star>

                  <S.Star>
                    <AiFillStar />
                  </S.Star>
                </S.IconStars>
                <S.Total>(1616)</S.Total>
              </S.ContainerStars>

              <S.ContainerFavorite>
                <S.IconFavorite>
                  <S.Favorite>
                    <AiFillHeart />
                  </S.Favorite>
                </S.IconFavorite>

                <S.Total>(876)</S.Total>
              </S.ContainerFavorite>
            </S.ContainerItems>
          </S.Container>
        </S.NavBarSalon>

        <S.Service>
          <S.ContainerAll>
            <S.Agendamento>
              <S.HeaderAgendamento>
                <S.ContainerLista>
                  <S.Lista
                    onClick={() => {
                      handleAgendar();
                      handleOnClick();
                    }}
                    className={activeIndex}
                  >
                    AGENDAR SERVIÇOS
                  </S.Lista>

                  <S.Lista
                    onClick={() => {
                      handleGaleria();
                      handleOnClick();
                    }}
                  >
                    GALERIA DE FOTOS
                  </S.Lista>

                  <S.Lista
                    onClick={() => {
                      handleRecomendacoes();
                      handleOnClick();
                    }}
                  >
                    RECOMENDAÇÕES
                  </S.Lista>
                </S.ContainerLista>
              </S.HeaderAgendamento>
              <S.BodyAgendamento>
                <S.BodyContainerElements>
                  {/* {agendar.show ? <AgendarServices /> : null}

                  {galeria.show ? <AgendarServices /> : null}

                  {recomendacoes.show ? <Recomendacoes /> : null} */}
                </S.BodyContainerElements>
              </S.BodyAgendamento>
            </S.Agendamento>

            <S.AboutSalon>
              <S.HeaderAboutSalon>
                <S.Accoes>
                  <S.IconsHeaderSalon className="icon-header-salon">
                    <AiOutlineHeart />
                  </S.IconsHeaderSalon>
                  <S.DescricaoAccoes>Favoritar</S.DescricaoAccoes>
                </S.Accoes>

                <S.Accoes>
                  <S.IconsHeaderSalon className="icon-header-salon">
                    <AiOutlineFacebook />
                  </S.IconsHeaderSalon>
                  <S.DescricaoAccoes>Compartilhar</S.DescricaoAccoes>
                </S.Accoes>
              </S.HeaderAboutSalon>
              <S.BodyAboutSalon>
                 
                <S.ContainerWorkTime>
                  <S.IconWorkTime>
                    <AiOutlineClockCircle />
                  </S.IconWorkTime>
                  <S.WorkTime>Aberto hoje: 08:00-20:00</S.WorkTime>
                </S.ContainerWorkTime>

                <S.ContainerAboutSalon>
                  <S.Title>SOBRE</S.Title>
                  <S.DescricaoAboutSalon>
                    Beauty Kings e Queens é um salão de beleza para unisexo.
                    Especializada em cortes, barba, sobrancelha, tranças...
                  </S.DescricaoAboutSalon>
                </S.ContainerAboutSalon>

                <S.ContainerTPA>
                  <S.IconWorkTime>
                    <GoCreditCard />
                  </S.IconWorkTime>
                  <S.DescricaoAboutSalon>TPA: disponível</S.DescricaoAboutSalon>
                </S.ContainerTPA>

                <S.ContainerPrincipalRedesSociais>
                  <S.Siga>SIGA-NOS</S.Siga>
                  <S.ContainerRedesSociais>
                    <S.IconRedesSocias>
                      <RiFacebookFill />
                    </S.IconRedesSocias>
                    <S.DescricaoAboutSalon>
                      {" "}
                      /Be@uty Kings e Queen
                    </S.DescricaoAboutSalon>
                  </S.ContainerRedesSociais>

                  <S.ContainerRedesSociais>
                    <S.IconRedesSocias>
                      <AiOutlineInstagram />
                    </S.IconRedesSocias>
                    <S.DescricaoAboutSalon>
                      {" "}
                      __Be@uty Kings e Queen
                    </S.DescricaoAboutSalon>
                  </S.ContainerRedesSociais>
                </S.ContainerPrincipalRedesSociais>
              </S.BodyAboutSalon>
            </S.AboutSalon>
          </S.ContainerAll>
        </S.Service>
      </S.Wrapper>
      <Footer />
    </>
  );
}

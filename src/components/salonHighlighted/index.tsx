import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Reservar from "../buttons/reserveSalon";
import * as S from "./styles";

 
const Salon = [
  {
    id: 0,
    name: "KINGS",
    image:
      "https://lh3.googleusercontent.com/FayWoK-usq2JBtsERJ3uXzqzV6DkkUEyU5p0OC8PV7oOiy_qFMZg4Cs5IL2YExqpGabTXhQvr_w7NXYgvrydmpiUTctIxWHonoZHgKCOW1c5mjuvERXHWY2UG55_NfdjeaGpm0rUuHlE3_11cxXxCaHRL9XUZ_IgQ7PKUzgfRK4YqBf-qtI5MILESYEdluPkmsziO0DbIDh-nXxQeIk_kQc7tohHPBCuDW4nm82CTfSQgy6WvUCuJPAgiqkCDzo6NEY7e82KaMcuqgH5HhYYiASTRmgtPU1c-2zoLdFHyKKmyxwPbDPnjQ0KyMLUYXA4hKxlPEgHO5u4CMQaM26dZYI4Eij2_4oHbZdNhntPMu1WEWYJWQOnlcbWcG4jQiPK9XdxOOe-MBhe3zgh_BLCVPk9-BaVMTXcWSnGSnOyQ83x0n8qNP5HHFHqZhHcpyT33K5Qu8z1uksVKtwA9JIAo5Vj428ehuJuqfo3teKdts521Mpvv29CP2IBRd4pDS7rsnRzUJjwnxSNXuNYx8goBWig3NBCKaXUWye4RtHHTuc_RZUpOaJdNn36f7lTxNEbdP7xEIOs8IS5eiaRBhVXrNg2opj_0cFMotPP1Jv3Xg5u8fmAkoTC9BV49E9pJ7w2DjYtEFTi1azRFTEAN4SctW7L69rQGH3w_t9R03mmGyBe1k7QKAw5_ysmHNRzTU_ls-aZHmFO8IDx0wBbLXvdZoSD=w348-h260-no?authuser=0",
    location: "ANGOLA, LUANDA, KILAMBA",
  },
  {
    id: 1,
    name: "SALÃO DAS MURALHAS",
    image:
      "https://www.versum.com/m/br/wp-content/uploads/sites/8/2019/12/Marketing-e-propaganda-de-sal%C3%A3o-de-beleza-sem-complica%C3%A7%C3%A3o.jpg",
    location: "ANGOLA, LUANDA, MAIANGA",
  },
  {
    id: 2,
    name: "DONA XEPA",
    image:
      "https://cdn.pixabay.com/photo/2018/03/31/04/48/beauty-salon-3277314_960_720.jpg",
    location: "ANGOLA, LUANDA, TALATONA",
  },
  {
    id: 3,
    name: "SALÃO DO GUETTO",
    image:
      "https://www.guiadasemana.com.br/contentFiles/image/2017/02/FEA/principal/49393_w840h0_1486764558shutterstock-barbearia.jpg",
    location: "ANGOLA, LUANDA, KK",
  },
];


  
export default function SalonHighlighted() {
  return (
    <S.Container>
      <S.ContainerAllElements>
        <S.ContainerTitles>
          <S.Title>SALÕES MAIS DESTACADOS</S.Title>
        </S.ContainerTitles>

        <S.ContainerCads>
          {Salon.map((item: any) => (
            <S.Card key={item.id}>
              <S.Image style={{ backgroundImage: `url(${item.image})` }}>
                <S.ContainerBackground className="back">
                  <S.QuantClassificacoes>
                    30 Classificações
                  </S.QuantClassificacoes>
                </S.ContainerBackground>
              </S.Image>

              <S.ContainerDescription>
                <S.Name href="/salonPage">{item.name}</S.Name>

                <S.ContainerItems>
                  <S.Location>
                    <S.IconLocation>
                      <IoLocationSharp />
                    </S.IconLocation>
                    {item.location}
                  </S.Location>
                </S.ContainerItems>

                <S.Stars>
                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>

                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>

                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>

                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>

                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>
                </S.Stars>

                <Reservar />
              </S.ContainerDescription>
            </S.Card>
          ))}
        </S.ContainerCads>
      </S.ContainerAllElements>
    </S.Container>
  );
}



/*<S.Container>
      <S.ContainerAllElements>
        <S.ContainerTitles>
          <S.Title>SALÕES MAIS DESTACADOS</S.Title>
        </S.ContainerTitles>

        <S.ContainerCads>
          {Salon.map((item) => (
            <S.Card key={item.id}>
              <S.Image style={{ backgroundImage: `url(${item.image})` }}>
                <S.ContainerBackground className="back">
                  <S.QuantClassificacoes>
                    30 Classificações
                  </S.QuantClassificacoes>
                </S.ContainerBackground>
              </S.Image>

              <S.ContainerDescription>
                <S.Name href="/salonPage">{item.name}</S.Name>

                <S.ContainerItems>
                  <S.Location>
                    <S.IconLocation>
                      <IoLocationSharp />
                    </S.IconLocation>
                    {item.location}
                  </S.Location>
                </S.ContainerItems>

                <S.Stars>
                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>

                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>

                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>

                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>

                  <S.IconStar>
                    <FaStar />
                  </S.IconStar>
                </S.Stars>

                <Reservar />
              </S.ContainerDescription>
            </S.Card>
          ))}
        </S.ContainerCads>
      </S.ContainerAllElements>
    </S.Container>*/

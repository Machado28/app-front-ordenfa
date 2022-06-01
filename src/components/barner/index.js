import Paragrapth from "../Paragraphy";
import Container, { CenterText, CenterButton, Opacity } from "./styled";
import Title from "./../Title/index";
import Button from "../form/Button/index";
import urlBackground from "./assets/img/Cooperativa-de-Servicos-Medicos-o-que-e-e-como-abrir-uma-2.jpeg";
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

const title1 = ["Orderm Dos Enfermeiros Angolanos"];
const paragraphy = [
  " Bem-vindo a Ordenafa. temos sempre o melhor a oferecer para os nossos funcionários ",
];
const Barner = ({
  Slider = [
    {
      title: "Ordem dos Enfemeiros de Angoa",
      text: "fdfkldjglksdfjgkljdfkgjskdlfgjsldkgjdjglsdjgkldjglssngkdfgjskldjglkdjfgls",
      button1: "ver mais...",
      button2: "cadstrar-se",
      img: [{ path: urlBackground }],
    },
    {
      title: "Cadastre",
      text: "fdfkldjglksdfjgkljdfkgjskdlfgjsldkgjdjglsdjgkldjglssngkdfgjskldjglkdjfgls",
      button1:{nome:"Sobre",redirect:'/sobre'},
      button2:{nome:'Solicitar',redirect:'/solicitacao'},
      img: [{ path: urlBackground }],
    },
  ],
}) => {
  const [sliderPositionText, setSliderPositionText] = useState(0);
  const [sliderPositionImg, setSliderPositionImg] = useState(0);

  const sliderLenght = Slider.length - 1;
  const sliderLenghtImg = Slider[sliderPositionText].img.length - 1;
  let controlSlider = 0;

  const HandleSliderText = () => {
    // const slider = Math.round(Math.random() * (sliderLenght - 0) + 0);
    setInterval(() => {
      controlSlider += 1;
    },200);
    setSliderPositionText(controlSlider);
    if (controlSlider >= sliderLenght) {
      controlSlider = 0;
    }
    console.log("certo" + sliderPositionText);
  };
  const HandleSliderImg = () => {
    const slider = Math.round(Math.random() * (sliderLenghtImg - 0) + 0);
    setSliderPositionImg(slider);
  };
  setTimeout(() => HandleSliderText(), 200);
  return (
    <Container
      imgSlider={Slider[sliderPositionText].img[sliderPositionImg].path}
    >
      <Opacity>
        <CenterText>
          {" "}
          <Title text={Slider[sliderPositionText].title}></Title>
          <Paragrapth text={Slider[sliderPositionText].text}></Paragrapth>
        </CenterText>
        <CenterButton>
          <Button
            className={"button  first-button"}
            text={Slider[sliderPositionText].button1.nome}
          ><Redirect to={Slider[sliderPositionText].button1.redirect}></Redirect></Button>
          <Button
            className={"button  second-button"}
            text={Slider[sliderPositionText].button2.nome}
          > <Redirect to={Slider[sliderPositionText].button2.redirect}></Redirect></Button>
        </CenterButton>
      </Opacity>
    </Container>
  );
};
export default Barner;

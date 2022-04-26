import styled from "styled-components";
import urlBackground from "./assets/img/Cooperativa-de-Servicos-Medicos-o-que-e-e-como-abrir-uma-2.jpeg";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${(item)=> item ?item.imgSlider:'none'});
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition:0.7s ease-in;
`;
export default Container;

const Opacity = styled(Container)`
  background: #021802a6;
  padding-top:100px;
`;
export { Opacity };

const CenterText = styled(Container)`
  background: transparent;
  box-shadow: 12px 9px 4px #1f1f1f1c;
  width: 80%;
  height: 130px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 4%;
   transition:0.7s ease-in;
`;
export { CenterText };

const CenterButton = styled(CenterText)`
  flex-direction: row;
  width: 83%;
  height: 100px;
  margin-top:4%;
  transform: translateY(25px);
   transition:0.7s ease-in;

  button.button {
    height: 50px !important;
    width:150px;
    transition:0.5s ease-out;
  }
  button.first-button {
    background-color: transparent;
  }

  button.button:hover {
    background-color: #fff;
    color: green;
    
  }
`;
export { CenterButton };

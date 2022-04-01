import styled from "styled-components";
import urlBackground from "./assets/img/Cooperativa-de-Servicos-Medicos-o-que-e-e-como-abrir-uma-2.jpeg";

const Container = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url(${urlBackground});
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export default Container;

const Opacity = styled(Container)`
  background: #02180266;
`;
export { Opacity };

const CenterText = styled(Container)`
  background: transparent;
  box-shadow: 12px 9px 4px #1f1f1f1c;
  margin-bottom: 16%;
  margin-left:22%;
  width: 60%;
  height: 500px;
  
  align-items: flex-start;
`;
export { CenterText };

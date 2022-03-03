import { Title } from "../../components/form/styled";
import Container, { _Modal, } from "./styled";
import dataInputs from "./data";
import Form from "./../../components/form";

const Inscricao = () => {
  return (
    <Container>
      <_Modal>
        <Title>FORMULÁRIO DE INSCRIÇÃO</Title>
        <h5>Home / Inscricao</h5>
        <Form Inputs={dataInputs}/>
      
      </_Modal>
    </Container>
  );
};
export default Inscricao;

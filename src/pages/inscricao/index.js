 
import Container from "./styled";
import { _Modal } from "./../minhaCarteira/styled";
import dataInputs from "./data";
import Form from "./../../components/form";
import data from './../../components/header/data';
 

const Inscricao = () => {
  return (
    <Container>
      <_Modal>
      <Form dataInputs={dataInputs} title={'Formuário de Inscrição '} />
    </_Modal>
    </Container>
  );
};
export default Inscricao;

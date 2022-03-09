 
import Container, { _Modal } from "./styled";
import dataInputs from "./data";
import Form from "./../../components/form";
import data from './../../components/header/data';
 

const Inscricao = () => {
  return (
    <Container>
      <Form Inputs={dataInputs} title={'Formuário de Inscrição '} />
    
    </Container>
  );
};
export default Inscricao;

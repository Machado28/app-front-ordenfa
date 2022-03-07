 
import Container, { _Modal } from "./styled";
import dataInputs from "./data";
import Form from "./../../components/form";

const Inscricao = () => {
  return (
    <Container>
      <Form Inputs={dataInputs} title={'Formuário de Inscrição '} />
    </Container>
  );
};
export default Inscricao;

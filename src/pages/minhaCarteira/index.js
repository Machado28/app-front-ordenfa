import Container, { _Modal, _ModalChildren } from "./styled";
import dataInputs from "./data";
import Form from "./../../components/form";

const InputcodigoInscricao=[
  [
    'Você está inscrito?',
    [{
      name:'Código da inscrição:',
      pleaceHolder:'Qual é o seu código de Inscrição?',
      type:'text'
    }],

  ]
]
const MinhaCarteira = ({click=Form}) => {
  return (
    <Container>
      <_Modal>
         
       fdfdfdfdfd
          <Form
        dataInputs={InputcodigoInscricao}
        title={"Formuário de Solicitação de Carteira "}
      />
       
      </_Modal>
      <Form
        dataInputs={dataInputs}
        title={"Formuário de Solicitação de Carteira "}
      />
    </Container>
  );
};
export default MinhaCarteira;

 
import Container,{FormContainer} from "./styled";
import dataGroup, { Slider } from './data'
import Barner from "../../components/barner";
import Form from "../../components/form";
const Inscricao =()=>{

    return(
         <Container>
             <Barner Slider={Slider}></Barner>
            <FormContainer>
              
                 <Form title={'Formulário de Inscrição'} dataGroup={dataGroup}></Form>
            </FormContainer>
           
         </Container>
    )
}
export default Inscricao;
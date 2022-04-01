import Barner from "../components/barner";
import Form from '../components/form'
import Container,{FormContainer} from "./styled";
const Home =()=>{

    return(
         <Container>
             <Barner></Barner>
            <FormContainer>
                 <Form></Form>
            </FormContainer>
         </Container>
    )
}
export default Home;
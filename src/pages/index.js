import Barner from "../components/barner";
import Footer from "../components/footer";
import Form from '../components/form'
import Container,{FormContainer} from "./styled";
const Home =()=>{

    return(
         <Container>
             <Barner></Barner>
            <FormContainer>
                 <Form></Form>
            </FormContainer>
            <Footer></Footer>
         </Container>
    )
}
export default Home;
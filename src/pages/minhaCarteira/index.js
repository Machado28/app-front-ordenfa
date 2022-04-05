 
import dataGroup from "./data";
import Form from "./../../components/form";
import Barner from "../../components/barner";
import Footer from "../../components/footer";
import Container,{ FormContainer } from "../styled";

const MinhaCarteira = () => {
  return (
    <Container>
      <Barner></Barner>
      <FormContainer>
        <Form dataGroup={dataGroup}></Form>
      </FormContainer>
      <Footer></Footer>
    </Container>
  );
};
export default MinhaCarteira;

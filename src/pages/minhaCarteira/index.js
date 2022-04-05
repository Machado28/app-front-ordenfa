 
import dataGroup from "./data";
import Form from "./../../components/form";
import Barner from "../../components/barner";
import Footer from "../../components/footer";
import Container,{ FormContainer } from "../styled";
import { Slider } from "../inscricao/data";

const MinhaCarteira = () => {
  return (
    <Container>
      <Barner Slider={Slider}></Barner>
      <FormContainer>
        <Form dataGroup={dataGroup}></Form>
      </FormContainer>
      <Footer></Footer>
    </Container>
  );
};
export default MinhaCarteira;

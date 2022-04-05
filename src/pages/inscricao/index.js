import Container from "./styled";
import dataGroup, { Slider } from "./data";
import Barner from "../../components/barner";
import Form from "../../components/form";
import Footer from "../../components/footer";
import { FormContainer } from "../styled";
const Inscricao = () => {
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
export default Inscricao;

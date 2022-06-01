 
import dataGroup from "./data";
import Form from "./../../components/form";
import Barner from "../../components/barner";
import Footer from "../../components/footer";
import Container,{ FormContainer } from "../styled";
import { Slider } from "./data";

const MinhaLincenca = () => {
  return (
    <>
      
      <Barner Slider={Slider}></Barner>
      <FormContainer>
       
        <Form title={'Licença de estágio'} dataGroup={dataGroup}></Form>
      </FormContainer>
      <Footer></Footer>
    </>
  );
};
export default MinhaLincenca;

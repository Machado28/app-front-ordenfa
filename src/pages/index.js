import Barner from "../components/barner";
import Footer from "../components/footer";
import Form from "../components/form";
import Container, { FormContainer } from "./styled";
import dataGroup from "./data";
import { useState } from 'react';

const Home = () => {


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
export default Home;

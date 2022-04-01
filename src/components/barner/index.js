import Paragrapth from "../Paragraphy";
import Container, { Opacity } from "./styled";
import Title from './../Title/index';


const title1=["Orderm Dos Enfermeiros Angolanos"]
const paragraphy=[" Bem-vindo a Ordenafa. temos sempre o melhor a oferecer para os nossos funcionários "]
const Barner =()=>{

    return(
       <Container>
           <Opacity>
               <Title text={title1}></Title>
               <Paragrapth text={paragraphy +paragraphy+paragraphy+paragraphy}></Paragrapth>
           </Opacity>
       </Container>
    )
}
export default Barner;
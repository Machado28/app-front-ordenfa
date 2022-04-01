import Paragrapth from "../Paragraphy";
import Container, { CenterText,CenterButton, Opacity } from "./styled";
import Title from './../Title/index';
import Button from "../form/Button/index";


const title1=["Orderm Dos Enfermeiros Angolanos"]
const paragraphy=[" Bem-vindo a Ordenafa. temos sempre o melhor a oferecer para os nossos funcionários "]
const Barner =()=>{

    return(
       <Container>
           <Opacity>
              <CenterText> <Title text={title1}></Title>
               <Paragrapth text={paragraphy +paragraphy+paragraphy+paragraphy}></Paragrapth>
               </CenterText>
               <CenterButton>
                   <Button className={'button  first-button'} text ={'Ver mais...'}></Button>
                    <Button className={'button  second-button'} text ={'Solicitar carteira'}></Button>
               </CenterButton>
           </Opacity>
       </Container>
    )
}
export default Barner;
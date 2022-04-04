import Paragrapth from "../Paragraphy";
import Container, { CenterText,CenterButton, Opacity } from "./styled";
import Title from './../Title/index';
import Button from "../form/Button/index";
import urlBackground from "./assets/img/Cooperativa-de-Servicos-Medicos-o-que-e-e-como-abrir-uma-2.jpeg";


const title1=["Orderm Dos Enfermeiros Angolanos"]
const paragraphy=[" Bem-vindo a Ordenafa. temos sempre o melhor a oferecer para os nossos funcionários "]
const Barner =({Slider=[
    {
        title:'Ordem dos Enfemeiros de Angoa',
        text:"fdfkldjglksdfjgkljdfkgjskdlfgjsldkgjdjglsdjgkldjglssngkdfgjskldjglkdjfgls",
        button1:'ver mais...',
        button2:"cadstrar-se",
        img:[
            {path:urlBackground}
        ]
    }
]})=>{
const sliderPosition=0
const sliderPositionImage=0
    return(
       <Container imgSlider={Slider[sliderPosition].img[sliderPositionImage].path}>
           <Opacity>
              <CenterText> <Title text={Slider[sliderPosition].title}></Title>
               <Paragrapth text={Slider[sliderPosition].text}></Paragrapth>
               </CenterText>
               <CenterButton>
                   <Button className={'button  first-button'} text={Slider[sliderPosition].button1}></Button>
                    <Button className={'button  second-button'} text={Slider[sliderPosition].button2}></Button>
               </CenterButton>
           </Opacity>
       </Container>
    )
}
export default Barner;
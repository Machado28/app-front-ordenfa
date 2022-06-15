
import { Slider,texto } from "./data";
import Barner from "src/components/barner";
import Services from "src/components/cardServices";
import CardAdvantage from "src/components/cardAdvantage";
import Album from "src/components/Album";
import Footer from "src/components/footer";
import Texto from "src/components/Texto";


const Contactos= () => {
  return (
    <>
      <Barner Slider={Slider}></Barner>
     <Texto conteudo={texto.conteudo} titulo={texto.titulo}></Texto>
     <Services />
   
      <Footer></Footer>
    </>
  );
};
export default Contactos;


import { Slider } from "./data";
import Barner from "src/components/barner";
import Services from "src/components/cardServices";
import CardAdvantage from "src/components/cardAdvantage";
import Album from "src/components/Album";
import Footer from "src/components/footer";
import Texto from "src/components/Texto";
 

const AboutUs= () => {
  return (
    <>
      <Barner Slider={Slider}></Barner>
     <Texto></Texto>
  <CardAdvantage></CardAdvantage>
  <Album></Album>
   
      <Footer></Footer>
    </>
  );
};
export default AboutUs;

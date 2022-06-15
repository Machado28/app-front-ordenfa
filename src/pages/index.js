import Barner from "../components/barner";
import Footer from "../components/footer";

import Container from "./styled";

import { Slider } from "./data";
import Services from "./../components/cardServices/index";
import CardAdvantage from "./../components/cardAdvantage/index";
import Album from "src/components/Album";
import Pricing from "src/components/Pricing";

const Home = () => {
  return (
    <>
      <Barner Slider={Slider}></Barner>
      <Services />
 
  <CardAdvantage></CardAdvantage>
  <Album></Album>
  <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
};
export default Home;

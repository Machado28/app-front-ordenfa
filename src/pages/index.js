import Barner from "../components/barner";
import Footer from "../components/footer";

import Container from "./styled";

import { Slider } from "./data";
import Services from "./../components/cardServices/index";
 
import CardAdvantage from "/../components/cardAdvantage/index";
 

const Home = () => {
  return (
    <>
      <Barner Slider={Slider}></Barner>
      <Services />
 
  <CardAdvantage></CardAdvantage>
 
      <Footer></Footer>
    </>
  );
};
export default Home;

import Barner from "../components/barner";
import Footer from "../components/footer";

import Container from "./styled";

import { Slider } from "./data";
import Services from "./../components/cardServices/index";

const Home = () => {
  return (
    <>
      <Barner Slider={Slider}></Barner>
      <Services />

      <Footer></Footer>
    </>
  );
};
export default Home;

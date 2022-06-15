import { BrowserRouter, Switch } from "react-router-dom";
import Route from "../Routes/index"
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../pages/index";
import AboutUs from "src/pages/aboutUs";
import Servicos from "src/pages/serviços";
import Contactos from "src/pages/contactos";

const logar = true;
const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sobre" component={AboutUs}></Route>
        <Route exact path="/servico" component={Servicos}></Route>
        <Route exact path="/contactos" component={Contactos}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

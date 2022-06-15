import { BrowserRouter, Switch } from "react-router-dom";
import Route from "../Routes/index"
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../pages/index";
import AboutUs from "src/pages/aboutUs";
 


const logar = true;

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sobre" component={AboutUs}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

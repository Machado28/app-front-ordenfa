import { BrowserRouter, Switch } from "react-router-dom";
import Route from "../Routes/index"
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../pages/index";
 


const logar = true;

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

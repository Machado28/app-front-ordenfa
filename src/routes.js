import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/index";
import Inscricao from "./pages/inscricao";
import MinhaCarteira from "./pages/minhaCarteira";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/inscricao" component={Inscricao}></Route>
        <Route  path="/minhaCarteiraTecnico" component={MinhaCarteira}></Route>
      </Switch>
    
    </BrowserRouter>
  );
};
export default Routes;

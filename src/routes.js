import { BrowserRouter, Route,  Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages";
import Inscricao from "./pages/inscricao";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/inscricao" component={Inscricao}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

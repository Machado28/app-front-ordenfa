import { BrowserRouter, Route,  Switch } from "react-router-dom";
import Header from "./components/header";
import { NavMobile } from "./components/nav";
import Home from "./pages";
import Inscricao from "./pages/inscricao";
import data from './components/header/data';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <NavMobile data={data}></NavMobile>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/inscricao" component={Inscricao}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

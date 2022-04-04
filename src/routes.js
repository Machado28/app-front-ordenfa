import { BrowserRouter, Route,  Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from './pages/index'
import Inscricao from "./pages/inscricao";
 
 

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
         <Route exact path="/inscricao" component={Inscricao}></Route>
      </Switch>
      <Footer>kkk</Footer>
    </BrowserRouter>
  );
};
export default Routes;

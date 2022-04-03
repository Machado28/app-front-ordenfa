import { BrowserRouter, Route,  Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from './pages/index'
 
 

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer>kkk</Footer>
    </BrowserRouter>
  );
};
export default Routes;

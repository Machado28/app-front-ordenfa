import { BrowserRouter, Route,  Switch } from "react-router-dom";
import Header from "./components/header";
 
 
 

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

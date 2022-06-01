import { BrowserRouter,Switch } from "react-router-dom";
import Route from "../Routes/index"
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../pages/index";
import Inscricao from "../pages/inscricao";
import MinhaCarteira from "../pages/minhaCarteira";
import MinhaLincenca from "../pages/minhaLicença";
import Login from "../pages/Login/index"; 
import DashBoard from "../pages/dashBoard/index";  
import Users from "src/pages/dashBoard/Users";
import Perfil from "src/pages/dashBoard/Users/perfil";
const logar = true;

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        
 
         <Route  path="/login" component={Login}></Route>
         <Route  path="/dashboard" component={DashBoard}></Route>
         <Route  path="/usuarios" component={Users}></Route>
         <Route  path="/usuario/:id" component={Perfil}></Route>
         
        <Route path="/inscricao"   component={Inscricao}></Route>
        <Route path="/minhaCarteiraTecnico" isPrivate component={MinhaCarteira}></Route>
        <Route path="/minhaLicencaTecnico" isPrivate component={MinhaLincenca}></Route> 
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

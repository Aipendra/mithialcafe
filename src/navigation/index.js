import {
     Router,
   Routes ,
    Route
} from "react-router-dom";
import { Header } from "../components/header";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Paymentsucess from "../pages/Paymentsucess ";
import Register from "../pages/Register";

const Navigation = ()=>{
    return(
        <Router>
        <Header/>
        <Routes>
           <Route path="/" element={<Cart/>}/>
           <Route path="/" element={<Home/>}/>
           <Route path="/" element={<Login/>}/>
           <Route path="/" element={<Menu/>}/>
           <Route path="/" element={<Paymentsucess/>}/>
           <Route path="/" element={<Register/>}/>
        </Routes>
        </Router>
        

        
    )
}
export default Navigation;
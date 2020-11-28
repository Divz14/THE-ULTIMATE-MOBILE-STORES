import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart  from './Components/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';
import SignInForm from './Components/SignInForm';
import SignUpForm from './Components/SignUpForm';
import Admin from './Components/Admin';
import AdminDLogin from './Components/AdminLogin';
function App() {
  return (
  <>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={SignInForm}></Route>
  <Route path="/productlist" component={ProductList}></Route>
   <Route path="/signup" component={SignUpForm}></Route>
    <Route path="/details" component={Details}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/admin" component={Admin}/>
    <Route path="/adminlogin"component={AdminDLogin}/>
    <Route  component={Default}/>
  </Switch>
<Modal/>
  </>
  );
}

export default App;

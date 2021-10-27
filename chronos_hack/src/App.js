import './App.css';
import Home from './components/home';
import Login from './components/auth/login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddInfo from './components/common/stockgallery/stockgallery';
import FarmerHome from './components/farmer/home';
import VendorHome from './components/vendor/home';
import Shop from './components/common/Shop/shop';

function App() {
  return (
    <div className="App">
        <Router>       
          <Switch>
            <Route path="/about" component={AddInfo}/>
            <Route path="/loginVendor" component={Login}/>
            <Route path="/loginFarmer" component={Login}/>
            <Route path="/farmer" component={FarmerHome}/>
            <Route path="/vendor" component={VendorHome}/>
            <Route path="/shop" component={Shop}/>
            
            {/* <Route path="/" component={}/> */}
            <Route path="/" component={Home}/>

          </Switch>
        </Router>    
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe("pk_test_51J1ZMBSAcREKGzoPPlrIbuuvCPrR5teEBxfJCMGacB1t9fSKij4rEonm7su3AkkiIZbyDckGeAYbcpT6kXf2FEuY00VCtou5S8");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run only once when the page is reload
    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>>  ',authUser);
      if(authUser){
         // the user just logged in / the        
         dispatch({
          type: "SET_USER",
          user : authUser
         });
      } else{
        //the user is logged out
         dispatch({
           type: "SET_USER",
           user: null,
         });
      }
    });
  },[]);

  return (
    <Router>
    <div className="App">
    
     <Switch>
          
       <Route path="/Login">
        <Login />
       </Route>

      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>

      <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
       </Route>
      
       <Route path="/Orders">
        <Header />
         <Orders />
       </Route>

      <Route path="/">
        <Header />
        <Home />
      </Route>

    </Switch>
    </div>
    </Router> 
  );
}

export default App;

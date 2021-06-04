import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the appr compoonent loads...
    auth.onAuthStateChanged(authUser => {
      console.log("The user is: ", authUser);

      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      } else {
        //the user ist logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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

import React, { useEffect } from "react";
import "./styles/App.scss";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/header";


function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //timeline
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route exact path='/about'>
            <AboutPage/>
          </Route> 
          <Route exact path='/new-customer' component={() => {
            window.location.href = 'http://splash.remotecatalog.com/getNewClient.php';
            return null;
          }}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

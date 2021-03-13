import React, { useEffect } from "react";
import "./styles/App.scss";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Cases2 from "./components/cases2";
import About from "./components/about";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //timeline
  }, []);

  return (
    <div className="App">
      <Header />
      <Cases2 />
      <About/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/about' render={({history}) => <AboutPage
          history={history}
          />  
        }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

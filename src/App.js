import React, { Component, useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/App.scss";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/header";
import Navigation from "./components/navigation";
import About from "./components/about";

//pages
import Home from "./pages/home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.addEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
     <>
      <Header dimensions={dimensions} />
       <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
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
    </>
  );
}

export default App;

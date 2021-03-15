import React, { Component, useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/App.scss";
import AboutPage from "./pages/AboutPage";
import Header from "./components/header";
import Navigation from "./components/navigation";
import About from "./components/About";

//pages
import Home from "./pages/home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: AboutPage },
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
    </>
  );
}

export default App;

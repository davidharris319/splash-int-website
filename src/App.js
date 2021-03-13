import React, { useEffect } from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Cases2 from "./components/cases2";

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
    </div>
  );
}

export default App;

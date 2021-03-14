import React from "react";
import Cases2 from "../components/cases2";
import About from "../components/About";
import NewCustomer from "../components/NewCustomer";
import Contact from "../components/Contact";



function HomePage() {

  return (
    <div className="HomePage">
      <Cases2 />
      <NewCustomer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default HomePage;
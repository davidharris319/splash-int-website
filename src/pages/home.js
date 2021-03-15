import React from "react";
import Banner from "../components/cases2";
import About from "../components/About";
import NewCustomer from "../components/NewCustomer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <NewCustomer/>
      <About/>
      <Contact/>
    </>
  );
};

export default Home;

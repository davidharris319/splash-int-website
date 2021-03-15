import React from "react";
import Banner from "../components/cases2";
import About from "../components/About";
import NewCustomer from "../components/NewCustomer";
import Contact from "../components/Contact";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <Banner />
      <NewCustomer/>
      <About/>
      <Video/>
      <Contact/>
    </>
  );
};

export default Home;

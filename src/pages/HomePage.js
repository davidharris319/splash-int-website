import React from "react";
import Cases2 from "../components/cases2";
import About from "../components/about";

function HomePage() {

  return (
    <div className="HomePage">
      <Cases2 />
      <About/>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BCWJyZQED9E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default HomePage;
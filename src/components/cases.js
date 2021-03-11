import React from "react";
import { RightArrow } from "../assets/icons";
import { LeftArrow } from "../assets/icons";

import clock from "../assets/clock.jpg";
import circleshelves from "../assets/circle_shelves3.jpg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Clock",
    title: "A clock that tells time",
    img: clock,
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: circleshelves,
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: clock,
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <LeftArrow />
          </div>
          <div className="cases-arrow next">
            <RightArrow />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>HEADING</h2>
              </div>
              <div className="case-image">
                <img src={caseItem.img} alt={caseItem.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;

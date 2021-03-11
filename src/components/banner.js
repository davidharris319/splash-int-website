import React from "react";
import { RightArrow } from "../assets/icons";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Supplying the </span>
            </div>
            <div className="line">
              <span>giftware industry.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              Shop now <RightArrow />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import foodent from "../assets/food-ent.jpg";
import garden from "../assets/garden.jpg";
import framePicture from "../assets/frames.jpg";

const content = [
  {
    title: "Supplying the giftware industry.",
    description: "",
    button: "Shop Now",
    image: foodent,
  },
  {
    title: "FUN IN THE SUN",
    description: "",
    button: "Discover",
    image: garden,
  },
  {
    title: "A frame for every occasion.",
    description: "",
    button: "View Catalogue",
    image: framePicture,
  },
];

const Cases = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
        </div>
      ))}
    </Slider>
  </div>
);

export default Cases;

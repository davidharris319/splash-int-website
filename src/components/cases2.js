import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import foodent from "../assets/food-ent.jpg";
import garden from "../assets/garden.jpg";

const content = [
  {
    title: "Supplying the giftware industry.",
    description: "",
    button: "Shop Now",
    image: foodent,
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "FUN IN THE SUN",
    description: "",
    button: "Discover",
    image: garden,
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
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

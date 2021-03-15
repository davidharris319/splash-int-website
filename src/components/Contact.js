import React from "react";
import '../styles/components/contact.scss';
import { Link } from 'react-router-dom';
import splashMap from '../assets/map_screenshot.png'


const Contact = () => {
  return (
    <section className="contact-container">
      <img className="splash-map" src={splashMap} alt="Google Maps Screenshot"/>
      <div className="contact-box">
          <h1>Visit Us </h1>
          <h3>Our showroom is conveniently located in Markham, Ontario, near both Highway 407 and Highway 404. Come visit and see our range of products.</h3>
          <div className="row">
            <div className="column">
              <p>395 Cochrane Drive, <br/>Markham, ON  L3R 9R5</p>
            </div>
            <div className="column">
              <p>Open Monday - Friday <br/>8:30am - 5:00pm</p>
            </div>
          </div>
          <a href="https://www.google.com/maps/dir//Splash+International+Marketing+Inc.,+Cochrane+Drive,+Markham,+ON/@43.842897,-79.4314537,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89d4d4be4cf56c85:0x24e04343b48cea09!2m2!1d-79.3614142!2d43.8429184" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}><button>
          Get Directions </button></a>
      </div>
    </section>
  );
};

export default Contact;
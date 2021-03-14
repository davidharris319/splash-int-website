import React from "react";
import '../styles/components/about.scss';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-background">
        <div className="text-box">
          <h2>About Splash International Marketing</h2>
          <p>
            Created back in 1985, with a vision to sell giftware, a mere five employees, a small office and an undersized warehouse, Splash International Marketing is now considered one of the top suppliers in Canada.
            </p>
            <Link to='/about'>Learn More</Link>
        </div>
      </div>

    </section>
  );
};

export default About;
import React from "react";
import '../styles/components/video.scss';
import { Link } from 'react-router-dom';

const Video = () => {
  return (
    <section className="video-container">
      <h1>Take a Tour of Our Showroom</h1><br/>
      <div className="iframe-container" style={{    paddingBottom: "min(550px, 56.25%)"}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BCWJyZQED9E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
  );
};

export default Video;
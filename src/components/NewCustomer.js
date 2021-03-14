import React from "react";
import '../styles/components/NewCustomer.scss';
import { Link } from 'react-router-dom';
import worldMap from '../assets/world_map.jpg'

const NewCustomer = () => {
  return (
    <section className="new-customer-container">
      <img src={worldMap} alt="World Map"/>
      <div className="text-box">

          <h1>Your trusted leader in the giftware industry to provide the most modern selection home decor, giftware and more. </h1>
          <br/><br/>
          Thank you for your interest in Splash. Our products may only be bought wholesale by approved trade businesses. 
          <br/><br/>
          Interested in becoming a dealer? Apply today to shop the entire product line, view prices and easily order online!
          <br/><br/>
          <Link to='/new-customer' style={{ textDecoration: 'none'}}><button>
          Apply Now </button></Link>
      </div>

    </section>
  );
};

export default NewCustomer;
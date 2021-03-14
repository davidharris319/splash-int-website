import React from "react";
import { Link } from 'react-router-dom';
import "../styles/AboutPage.scss";
import whitePlantHolders from '../assets/white_plant_holders.jpg'



function AboutPage() {

  return (
    <div>
      <div className="aboutPage">
        <img src={whitePlantHolders} alt="White Plant Holders"/>
        <div className="text-container">
          <h2>About Splash International Marketing</h2>
          <p>Created back in 1985, with a vision to sell giftware, a mere five employees, a small office, undersized warehouse, and relocating several times over the years from building to building, Splash International Marketing has now landed as a top supplier situated in our very own 60,000 sq. ft. building in Markham, Ontario. With over 40 employees, 22 Sales Reps, and our very own Head Office/Showroom and attached warehouse off Highway #7 and Woodbine Avenue, Splash has proudly grown to be a well-established supplier in the giftware industry in Canada. 
          <br/><br/>
          Over the last 36 years, we have continued to rise as one of the larger giftware suppliers in the industry and have won numerous awards including Supplier of the Year in 2016, and Supplier of the Year Honourable Mention in 2008, 2010, and 2014.
          <br/><br/>
          Selling to the wholesale market only, Splash strives to be your first choice as a supplier, bringing you the newest and on-trend products all year round, including our very popular and bi-annual Pre-Booking programs for Spring, Garden & Patio, as well as for Christmas/Holidays. Our Home Décor products will be the perfect fit for any retail store with categories ranging from Food, Wine and Entertainment items to Planters, Pots and Baskets, as well as Baby, Wedding and Graduation gifts to everything for your Cottage, Cabin and Farmhouse Décor. We also have a large selection of signs, Wall Art and Mirrors and special gifts for both Ladies & Men.
          <br/><br/>
          Open Monday to Friday, we welcome retailers to schedule an appointment to visit our showroom and see our products and the vast categories we offer in person.
          <br/><br/>
          You can also see us at The Toronto Gift Fair - http://www.cangift.org/Toronto-gift-fair/en/home or the Group Off Seven Open House Events - http://www.groupoffseven.com/
          <br/><br/>
          Alternatively, we would be more than happy to connect you with one of our Sales Representatives located all across Canada, who are eager to visit your store with our complete product line.</p>
          
          <Link to='/' style={{ textDecoration: 'none'}}>Back to Home Page</Link>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;
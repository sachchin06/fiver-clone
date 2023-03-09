import React from "react";
import "./features.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="left">
             <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="item">
           
            <div className="title">
              <img src="/img/check.png" alt="" />
             <span>The best for every budget</span>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
          </div>
          <div className="item">
            <div className="title">
              <img src="/img/check.png" alt="" />
             <span>Quality work done quickly</span>
            </div>
            <p>
              Find the right freelancer to begin working on your project within minutes.
            </p>
          </div>
          <div className="item">
        
            <div className="title">
              <img src="/img/check.png" alt="" />
              <span>Protected payments, every time</span>
            </div>
            <p>
              Always know what you&aposll pay upfront. Your payment isn&apost released until you approve the work.
            </p>
          </div>
          <div className="item">
          
            <div className="title">
              <img src="/img/check.png" alt="" />
            <span>24/7 support</span>
            </div>
            <p>
             Questions? Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
         
        </div>
        <div className="right">
            <video src="/img/video.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};

export default Features;

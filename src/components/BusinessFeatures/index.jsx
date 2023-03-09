import React from 'react';
import './businessFeatures.scss';

const BusinessFeatures = () => {
  return (
     <div className="businessFeatures">
      <div className="container">
        <div className="left">
             <h1>Fiver Business</h1>
             <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, deserunt.</h1>
       
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              sequi dolor quos
            </p>
           
            <div className="item">
              <img src="/img/check.png" alt="" />
             <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
              <div className="item">
              <img src="/img/check.png" alt="" />
             <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
              <div className="item">
              <img src="/img/check.png" alt="" />
             <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
           
         <button>Explore Fiverr Business</button>
         
        </div>
        <div className="right">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt='' />
        </div>
      </div>
    </div>
  )
}

export default BusinessFeatures
import React from "react";
import image from "./college_02.jpg";

const CardContainer = (props) => {
  console.log(props)
  return (
    <div>
      <div className="top-container">
        <div className="main-image">
          <img src={image} />
          <div className="promoted">PROMOTED</div>
          <div className="yellow-box">
            <div>3.9/5</div>
            <div>Very Good</div>
          </div>
          <div className="image-bottom-left">
            <span>Best college 2018</span>
            <span>2kms away</span>
          </div>
          <div className="image-bottom-right">
            <span>#7 in 260 colleges in north campus</span>
          </div>
        </div>
      </div>
      <div className="bottom-container display">
        <div className="bottom-container-left">
          <div className="same-line">
            <h3 style={{ fontWeight: 700, marginRight: 10 }}>
              Hansraj College Delhi University{" "}
            </h3>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <div className="same-line">
          <h4 style={{ fontWeight: 300 }}>Near Vishwavidyalya Metro Station</h4> 
          <span className="lighter"> 2 Kms away from Bus Stand</span>
          </div>
          <div className="same-line">
            <span style={{ color: "#37b396" }}>
              <strong>93% Match {" :  "}</strong>{" "}
            </span>
            <span>
  <strong>2.5kms</strong>
            </span>
            
            <span className="lighter"> from GTB Nagar , </span>
            <span>
              <strong>7 Kms</strong>
            </span>
            <span className="lighter"> from Rajiv Chowk</span>
          </div>
          <div style={{position:"relative"}}>
          <div className="last-name-tag">
            <span><strong>Flat Rs<span style={{ color: "#37b396" }}>2,000</span> off + upto Rs <span style={{ color: "#37b396" }}>500</span> wallet! to avail... <span style={{ color: "#37b396" }}>LOGIN</span> </strong></span>
          </div>
          </div>
        </div>
        <div className="bottom-container-right">
          <div className="bottom-container-right-top display">
          <div className="lighter" style={{ textDecoration: "line-through",marginRight:5,fontSize:15 }}>$ 8,000</div>{" "}
          <div className="bcrt2">20</div>  
          </div>
          <h1 style={{color:"#dd1c26"}}>$ 5,700</h1>
          <span className="lighter" style={{fontSize:12}}>Per Semester (3months)</span>
          <p style={{marginTop:38,color:"#37b396"}}><strong>Free Cancellation * Free Wifi</strong></p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;

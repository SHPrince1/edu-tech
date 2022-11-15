import React from "react";
import Hstyle from ".././styles/course.module.css";
// import LogoImg from "../images/log.png"; 
// import LayerImg from "../images/layer.png"; 

const CourseComponents = () => {
  return (
    <div>
      <div className={Hstyle.sbParentBox}>
        <div className={Hstyle.FlightrowBox}>
          <div className={Hstyle.FlightcolBox}>
            <div className={Hstyle.titleImage}>
              <p>Total Flight Bookng</p>
              <img  alt ="Image"/>
            </div>

            <div className={Hstyle.price}>5, 400</div>
            <div className={Hstyle.textArrow}>
            <img  alt ="Image"/>
              <p><span style={{color:"#FCA62B; font-weight: bold;"}}>80%</span> incrrease since last month</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CourseComponents;

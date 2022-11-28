import React from "react";
import Style from "../styles/services.module.css";
import { BsCash } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { GiSewingMachine, GiSolarSystem } from "react-icons/gi";
// import { MdBluetoothAudio } from "react-icons/md";
const Services = () => {
  return (
    <>
      <div className={Style.serviceBox}>
        <div className={Style.introtext}>
       
        </div>

        <div>
          <div className={Style.serviceText}>
            <h1>OUR SERVICES</h1>
          </div>
          <div className={Style.serRow}>
            <div className={Style.serCol}>
              <div className={Style.procesBox}>
                <div className={Style.logTitle}>
                  <BsCash size={29} color={"#46c2ca"} />
                  <p className={Style.header}>ABHS JSJSKS</p>
                </div>
                <div className={Style.content}>
                  <p>
                    elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>
                </div>
              </div>
            </div>
            <div className={Style.serCol}>
              <div className={Style.serCol}>
                <div className={Style.procesBox}>
                  <div className={Style.logTitle}>
                    <GiSolarSystem size={29} color={"#46c2ca"} />
                    <p className={Style.header}>ABHS JSJSKS</p>
                  </div>
                  <div className={Style.content}>
                    <p>
                    elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                    </p>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
          <div className={Style.serRow}>
            <div className={Style.serCol}>
              <div className={Style.procesBox}>
                <div className={Style.logTitle}>
                  <FaBox size={29} color={"#46c2ca"} />
                  <p className={Style.header}>ABHS JSJSKS</p>
                </div>
                <div className={Style.content}>
                  <p>
                  elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>
                </div>

                
              </div>
            </div>
            <div className={Style.serCol}>
              <div className={Style.serCol}>
                <div className={Style.procesBox}>
                  <div className={Style.logTitle}>
                    <GiSewingMachine size={29} color={"#46c2ca"} />
                    <p className={Style.header}>ABHS JSJSKS</p>
                  </div>
                  <div className={Style.content}>
                    <p>
                    elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                    </p>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import React from "react";
import style from "../styles/about.module.css";
import bwabt from "../images/group.webp";

const About = () => {
  return (
    <>
      <div className={style.abtBox}>
        <div className={style.title}>
          <h1>ABOUT US</h1>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.contentText}>
              <p>
                Intergrity, Excellence, and Client Focus are the key performance
                cultures fundamental to the success of our business.
              </p>
            </div>
            <div className={style.secContent}>
              <p>
                dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                
               
              </p>
              <p>
              consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
              </p>
              <p>
              elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
                leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet.
              </p>
            </div>
          </div>
          <div className={style.col}>
            <div>
              <img className={style.imgs} src={bwabt} alt="fireSpot" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

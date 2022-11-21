import React from "react";
import Loginc from "../components/loginc";
import Footer from "../components/footer";
import style from "../styles/lecturer.module.css"

const LecturerLogin = () => {
  return (
    <div>
      <div className={style.header}>
        <h6>ENTER LECTURER DETAILS</h6>
      </div>

      <Loginc />
      <Footer />
    </div>
  );
};

export default LecturerLogin;

import React from "react";
import style from "../styles/loginc.module.css";

const Loginc = () => {
  return (
    <>
      <div className={style.parentDiv}>
        <div className={style.contentDiv}>
          <form>
            <label>E Mail</label>
            <input type="email"
            placeholder="Enter your Email" />

            <label>Password</label>
            <input type="password" 
            placeholder="Enter your password"/>
            <div className={style.btn}>
              
              <a href="/student-login" >LOG IN</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginc;



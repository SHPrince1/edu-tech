import { useState, Link } from "react";
import React from "react";
import NavStyle from "../styles/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";

const TopNavbar = () => {
  const [visible, setVisible] = useState(true);
  function ToggleBurger() {
    setVisible(!visible);
  }
  return (
    <>
      <div className={NavStyle.navContainer}>
        <nav className={NavStyle.nav}>
          <div className={NavStyle.buger} onClick={ToggleBurger}>
            MENU
            <GiHamburgerMenu size={22} />
          </div>

          <ul className={visible ? NavStyle.ulItem : NavStyle.show}>
            <li>
              <a href="/">HOME</a>
            </li>

            <div className={NavStyle.dropDown}>
              <li href="/" className={NavStyle.subMenu}>
                ACCESSMENTS
              </li>
              <div className={NavStyle.dropdownContent}>
                <a className={NavStyle.dropdownLinks} href="/view-assignment">
                  VIEW ASSIGNMENT
                </a>
                <a className={NavStyle.dropdownLinks} href="/uploadpage">
                  UPLOAD ASSIGNMETS
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                  TAKE A TEST
                </a>
              </div>
            </div>
            <div className={NavStyle.dropDown}>
              <li className={NavStyle.subMenu}>MATERIALS</li>
              <div className={NavStyle.dropdownContent}>
                <a href="/" className={NavStyle.dropdownLinks}>
                  CHECK ASSIGNMENTS
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                  RECOMENDED BOOKS
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                  TEST RESULTS
                </a>
              </div>
            </div>
          </ul>
        </nav>

        <div className={NavStyle.SecdropDown}>
          <div className={NavStyle.dropDown}>
            <li className={NavStyle.subMenu}>STUDENT</li>
            <div className={NavStyle.dropdownContent}>
              <a href="/login" className={NavStyle.dropdownLinks}>
                LOGIN
              </a>
              <a href="/" className={NavStyle.dropdownLinks}>
                SIGN UP
              </a>
              
            </div>
          </div>

          <div className={NavStyle.dropDown}>
            <li className={NavStyle.subMenu}>LECTURER</li>
            <div className={NavStyle.dropdownContent}>
              <a href="/lecturer-login" className={NavStyle.dropdownLinks}>
                LOGIN
              </a>
              
              <a href="/" className={NavStyle.dropdownLinks}>
                SIGN UP
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;

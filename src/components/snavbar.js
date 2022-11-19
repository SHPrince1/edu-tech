import { useState } from "react";
import React from "react";
import NavStyle from "../styles/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";

const StudentNavbar = () => {
    const  [visible, setVisible] = useState(true);
    function ToggleBurger(){
        setVisible(!visible);
    };
  return (
    <>
      <div className={NavStyle.navContainer}>
        <nav className={NavStyle.nav}>
        <div className={NavStyle.buger} onClick={ToggleBurger}>
          MENU
          <GiHamburgerMenu size={22} />
        </div>

        <div>
            <h1>E LEARNING</h1>
        </div>
            
         <ul className={visible ? NavStyle.ulItem: NavStyle.show} >
            <li>
              <a href="/">HOME</a>
            </li>

            <div className={NavStyle.dropDown}>
              <a href="/" className={NavStyle.subMenu}>
               ACCESSMENTS
              </a>
              <div className={NavStyle.dropdownContent}>
                <a className={NavStyle.dropdownLinks} href= "/">
                 VIEW ASSIGNMENT
                </a>
                <a className={NavStyle.dropdownLinks} href="/">
                 UPLOAD ASSIGNMETS
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                  TAKE A TEST
                </a>
                
              </div>
            </div>
            <div className={NavStyle.dropDown}>
              <a href="/" className={NavStyle.subMenu}>
                MATERIALS
              </a>
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

            <li>
              <a href="/"> ALL COURSES</a>
            </li>
           
          </ul>
        </nav>
       
        <div className={NavStyle.SIcon}>
            <a href="/" >LECTURER</a>
            <div className={NavStyle.SIconLine}></div>
            <a href="/" >STUDENT</a>
        </div>
        
      </div>
    </>
  );
};

export default StudentNavbar;
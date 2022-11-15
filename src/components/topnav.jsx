import { useState } from "react";
import React from "react";
import NavStyle from "../styles/topnav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";

const Navbar = () => {
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

        
            
          <ul className={visible ? NavStyle.ulItem: NavStyle.show} >
            <li>
              <a href="/">HOMEPAGE</a>
            </li>

            <div className={NavStyle.dropDown}>
              <a href="/aboutus" className={NavStyle.subMenu}>
                WHO WE ARE
              </a>
              <div className={NavStyle.dropdownContent}>
                <a className={NavStyle.dropdownLinks} href="/">
                 WHO WE ARE
                </a>
                <a className={NavStyle.dropdownLinks} href="/">
                 THE BOARD
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                  MANAGEMENT TEAM
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                 COPORATE SOCIAL RESPONSOBILITY
                </a>
              </div>
            </div>
            <div className={NavStyle.dropDown}>
              <a href="/" className={NavStyle.subMenu}>
                OUR SERVICES
              </a>
              <div className={NavStyle.dropdownContent}>
                <a href="/" className={NavStyle.dropdownLinks}>
                  Link 1
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                  Link 2
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                  Link 3
                </a>
                <a href="/" className={NavStyle.dropdownLinks}>
                  Link 4
                </a>
              </div>
            </div>

            <li>
              <a href="/">RISK MANAGEMENT & INSURANCE</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </nav>
       
        <div className={NavStyle.SIcon}>
            <AiOutlineFileSearch size={24} />
        </div>
      </div>
    </>
  );
};

export default Navbar;

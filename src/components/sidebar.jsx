import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbIcons } from "react-icons/tb";
// import 'rsuite/dist/styles/rsuite-default.css';
import { Sidenav, Nav, Dropdown } from "rsuite";
import style from '../styles/sidebar.module.css';


//

import "rsuite/dist/rsuite.min.css";

import UserBadgeIcon from "@rsuite/icons/UserBadge";
import DashboardIcon from "@rsuite/icons/Dashboard";
import SettingIcon from "@rsuite/icons/Setting";
const Sidebar = () => {
  return (
    <div
      style={{
        display: "block",
        width: 250,
        paddingLeft:0,
        
        height: 250,
        
       
      }}
    >
      
      <Sidenav  defaultOpenKeys={["3", "4"]} activeKey="1"  className={style.allNav}>
        <Sidenav.Body >
          <Nav className={style.side}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
            <Link to ="/">Dashboard</Link>
            </Nav.Item>

            <Dropdown eventKey="4" title="Courses">
              <Dropdown.Item eventKey="4-1">Register</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">
                <a href="">View</a>
              </Dropdown.Item>
            </Dropdown>

            <Nav.Item eventKey="2" icon={<UserBadgeIcon />}>
              <Link to ="/profile">Profile</Link>
            </Nav.Item>

            <Nav.Item eventKey="3" icon={<SettingIcon />}>
              Settings
            </Nav.Item>

            <Dropdown eventKey="5" title="Advanced">
              <Dropdown.Item eventKey="5-1">Privacy</Dropdown.Item>
              <Dropdown.Item eventKey="5-2">About</Dropdown.Item>
              <Dropdown.Item eventKey="5-3">Terms</Dropdown.Item>
            </Dropdown>
            <Nav.Item eventKey="3" icon={<SettingIcon />}>
              Settings
            </Nav.Item>

            <Dropdown eventKey="6" title="Advanced">
              <Dropdown.Item eventKey="6-1">Privacy</Dropdown.Item>
              <Dropdown.Item eventKey="6-2">About</Dropdown.Item>
              <Dropdown.Item eventKey="6-3">Terms</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>

      

      
    </div>
  );
};

export default Sidebar;

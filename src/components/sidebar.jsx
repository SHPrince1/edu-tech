import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbIcons } from "react-icons/tb";
// import 'rsuite/dist/styles/rsuite-default.css';
import { Sidenav, Nav, Dropdown, Toggle } from "rsuite";
import style from "../styles/sidebar.module.css";

//

import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";

//

import "rsuite/dist/rsuite.min.css";

import SettingIcon from "@rsuite/icons/Setting";
const Sidebar = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <div className={style.sideNavBox}>
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Collapse"
        unCheckedChildren="Expand"
      />

      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["3", "4"]}
        className={style.allNav}
      >
        <Sidenav.Body>
          <Nav
            activeKey={activeKey}
            onSelect={setActiveKey}
            className={style.side}
          >
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              <Link to="/">Dashboard</Link>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="3"
              title="Courses"
              icon={<MagicIcon />}
            >
              <Nav.Item eventKey="3-1">Register Course</Nav.Item>
              <Nav.Item eventKey="3-2">View Courses</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Test"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1">Take Test</Nav.Item>
            </Nav.Menu>

            <Nav.Menu eventKey="4-5" title="Lecturer">
              <Nav.Item eventKey="4-5-1">Register</Nav.Item>
              <Nav.Item eventKey="4-5-2">Add Test</Nav.Item>
              <Nav.Menu eventKey="5-6" title="Materials">
                <Nav.Item eventKey="6-5-1">BOOKS</Nav.Item>
                <Nav.Item eventKey="6-5-2"> ASSIGNMENTS</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        {/* <Sidenav.Toggle
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        /> */}
      </Sidenav>
    </div>
  );
};

export default Sidebar;

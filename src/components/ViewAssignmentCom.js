import React from "react";
import Courses from "./courses";
import style from "../styles/viewassigncom.module.css";


const ViewAssignmentCom = () => {
  return (
    <div>
      <div className={style.container} >
        <Courses />
        <Courses />
        <Courses />
        <Courses />
      </div>
    </div>
  );
};

export default ViewAssignmentCom;

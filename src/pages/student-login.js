import React from 'react'
import style from "../styles/index.module.css";
import Courses from "../components/courses";

const StudentLogin = () => {
  return (
    <div>

<div className={style.container}>
        <div>
        <h2> AVAILABLE COURSES</h2>
       
      </div>
      <div className={style.courseBox}>
        <Courses />
        <Courses />
        <Courses />
        <Courses />
       
      </div>
     <br />
      <div className={style.courseBox}>
        <Courses />
        <Courses />
        <Courses />
        <Courses />
       
      </div>
      <br />
      <div className={style.regCourse}>
          <p>
            Regster New Course
          </p>
        </div>

          
        <div>
         
        </div>
      </div>
    </div>
  )
}

export default StudentLogin
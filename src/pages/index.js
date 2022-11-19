import React from "react";
import Courses from "../components/courses";
import FileUpload from "../components/fileUpload";
import StudentDashbord from "../components/student-dashbord";
import Slider from "../components/slider";
import style from "../styles/index.module.css";
import Footer from "../components/footer";

const index = () => {
  return (
    <div>
      <Slider />
    
      <div className={style.container}>
        {/* <div>
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
         
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default index;

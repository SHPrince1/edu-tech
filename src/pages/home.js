import React from "react";
import CourseComponents from "../components/CourseComponents";
import styles from "../styles/home.module.css";

function Home() {
  return (
    <div className={styles.parentDiv}>
      <CourseComponents />
      <CourseComponents />
      <CourseComponents />
    </div>
  );
}

export default Home;

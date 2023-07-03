import React from "react";
import styled from "./Landing.module.css";
import { Link } from "react-router-dom";
// import backGr from "../../Images/MM07.jpg";

const Landing = () => {
  return (
    <div className={styled.container}>
      {/* <img
        className={styled.landingPageContainer}
        src={backGr}
        alt="background"
      /> */}
      <h1 className={styled.bigTitle1}>Welcome to the</h1>
      <h1 className={styled.bigTitle2}>Countries app</h1>
      <div className={styled.divButton}>
        <Link to="/home" className={styled.linkBut}>
          <button className={styled.inButton}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

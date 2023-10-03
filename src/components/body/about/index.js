import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
         <br /> <span className="info-name">Aaron Philip</span>.
         <br />
         I'm a versatile Data Engineer and Python Developer with a strong background in data cleaning, exploratory data analysis, and end-to-end pipeline design. I excel in delivering efficient and reproducible workflows for data-driven research. I'm also a passionate Web Developer, adept at adopting new frameworks for user-centric web apps
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
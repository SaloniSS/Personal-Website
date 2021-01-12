import React from "react";
import "../styles/HeaderSection.css";
import Typed from "react-typed";

const HeaderSection = (props) => {
  const name = props.name;

  return (
    <div>
      <h1> Hello! </h1>
      <h1> I am {name}! </h1>
      <Typed
        strings={[
          "test11 Cyber Security Engineer",
          "Full Stack Developer",
          "CTF and Hackathon Enthusiast",
          "Software Engineer",
        ]}
        typeSpeed={100}
        backDelay={1100}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default HeaderSection;

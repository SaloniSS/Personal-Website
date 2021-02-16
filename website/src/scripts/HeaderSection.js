import React from "react";
import "../styles/HeaderSection.css";
import Typed from "react-typed";

const HeaderSection = (props) => {
  const name = props.name;

  return (
    <div
      style={{
        backgroundColor: "white",
        opacity: "75%",
        padding: "15px",
        borderRadius: "15px",
        color: "black",
      }}
    >
      <h1> Hello! </h1>
      <h1> I am {name}! </h1>
      <Typed
        strings={[
          "They/Them",
          "Lesbian",
          "Genderqueer",
          "Femme Non-binary",
          "Cyber Security Engineer",
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

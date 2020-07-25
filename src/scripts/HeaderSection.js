import React from "react";
import "../styles/HeaderSection.css";

const HeaderSection = (props) => {
  const name = props.name;

  return (
    <div>
      <h1> Hello! </h1>
      <h1> I am {name}! </h1>
    </div>
  );
};

export default HeaderSection;

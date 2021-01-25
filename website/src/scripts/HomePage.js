import React, { useState, useEffect } from "react";
import "../styles/App.css";

import HeaderSection from "./HeaderSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import AchievementsSection from "./AchievementsSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ActivitiesSection from "./ActivitiesSection";

var _ = require("lodash");
const axios = require("axios").default;

const HomePage = (props) => {
  const name = props.name;
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <header className="App-header Header-background">
        <HeaderSection name={name} />
      </header>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ActivitiesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;

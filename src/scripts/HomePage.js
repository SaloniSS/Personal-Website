import React, { Component } from 'react';
import '../styles/App.css';

import HeaderSection from './HeaderSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import AchievementsSection from "./AchievementsSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from  './ExperienceSection';
import ActivitiesSection from './ActivitiesSection';

class HomePage extends Component {
    name = "Saloni Shivdasani";
    linkedin = "http://linkedin.com/in/saloni-s/";
    github = "http://github.com/SaloniSS";
    github_username = "SaloniSS";
    devpost = "http://devpost.com/SaloniS";
    twitter = "https://twitter.com/GirlWithACode";

    render() {
        return (
            <div className="App">
                <header className="App-header Header-background">
                    <HeaderSection name={this.name}/>
                </header>
                <AboutSection/>
                <ExperienceSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <AchievementsSection/>
                <ActivitiesSection/>
                <ContactSection/>
            </div>
        );
    }
}

export default HomePage;
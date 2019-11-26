import React, { Component } from 'react';
import '../styles/App.css';

import MyNav from './myNav';
import HeaderSection from './HeaderSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';
import AchievementsSection from "./AchievementsSection";
import SkillsSection from "./SkillsSection";

class App extends Component {
    name = "Saloni Shivdasani";
    linkedin = "http://linkedin.com/in/saloni-s/";
    github = "http://github.com/SaloniSS";
    github_username = "SaloniSS";
    devpost = "http://devpost.com/SaloniS";
    twitter = "https://twitter.com/GirlWithACode";

    render() {
        return (
            <div className="App">
                <MyNav name={this.name} github={this.github} linkedin={this.linkedin}/>
                <header className="App-header Header-background">
                    <HeaderSection name={this.name}/>
                </header>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection github_username={this.github_username}/>
                <AchievementsSection/>
                <ContactSection/>
                <FooterSection linkedin={this.linkedin} github={this.github}
                               devpost={this.devpost} twitter={this.twitter}/>
            </div>
        );
    }
}

export default App;

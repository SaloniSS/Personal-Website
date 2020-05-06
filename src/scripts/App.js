import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';
import '../styles/App.css';

import MyNav from './myNav';
import FooterSection from './FooterSection';
import HomePage from './HomePage';
import ProjectsPages from './ProjectsPage';

class App extends Component {
    name = "Saloni Shivdasani";
    linkedin = "http://linkedin.com/in/saloni-s/";
    github = "http://github.com/SaloniSS";
    github_username = "SaloniSS";
    devpost = "http://devpost.com/SaloniS";

    render() {
        return (
            <div className="App">
                <Router>
                    <MyNav name={this.name} github={this.github} linkedin={this.linkedin} devpost={this.devpost}/>
                        <main>
                            <Switch>
                                <Route path="/" exact>
                                    <HomePage/>
                                </Route>
                                <Route path="/projects" exact>
                                    <ProjectsPages />
                                </Route>
                                <Redirect to="/"/>
                            </Switch>
                        </main>
                    <FooterSection linkedin={this.linkedin} github={this.github} devpost={this.devpost} twitter={this.twitter}/>
                </Router>
            </div>
        );
    }
}

export default App;

import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';
import '../styles/App.css';

import MyNav from './myNav';
import FooterSection from './FooterSection';
import HomePage from './HomePage';
import ProjectsPages from './ProjectsPage';
import ScrollToTop from './ScrollToTop';

const App = () => {
    const name = "Saloni Shivdasani"
    const linkedin = "http://linkedin.com/in/saloni-s/";
    const github = "http://github.com/SaloniSS";
    const devpost = "http://devpost.com/SaloniS";
    const resume = "https://bit.ly/resume-saloni";

    return (
        <div className="App">
            <Router>
                <MyNav name={name} linkedin={linkedin} github={github} devpost={devpost} resume={resume}/>
                    <main>
                        <ScrollToTop>
                            <Switch>
                                <Route path="/" exact>
                                    <HomePage name={name}/>
                                </Route>
                                <Route path="/projects" exact>
                                    <ProjectsPages />
                                </Route>
                                <Redirect to="/"/>
                            </Switch>
                        </ScrollToTop>
                    </main>
                <FooterSection linkedin={linkedin} github={github} devpost={devpost} resume={resume}/>
            </Router>
        </div>
    );

}

export default App;

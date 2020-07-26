import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Me from "./Me/Me";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";
import Education from "./Education/Education";

const Page = ({user}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Me user={user}/>
                </Route>
                <Route path="/projects">
                    <Projects user={user}/>
                </Route>
                <Route path="/work">
                    <Work user={user}/>
                </Route>
                <Route path="/education">
                    <Education user={user}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Page;

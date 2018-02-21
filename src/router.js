import React from 'react';
import { Switch, Route } from 'react-router-dom';
//scenes
import Home from './scenes/home/home';
import About from './scenes/about/about';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Switch>
        );
    }
}

export default Router;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//scenes
import Home from './home/home';
import About from './about/about';
import TestForm from './testForm/testForm';
import TestArticles from './testArticles/testArticles';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/testForm' component={TestForm} />
                <Route path='/testArticles' component={TestArticles} />
            </Switch>
        );
    }
}

export default Router;
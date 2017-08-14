'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

const app = document.querySelector("#app");

/**
 * Components
 */

import Header from './components/header';
import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import FeaturedProjects from './components/featured-projects';

class App extends React.Component{
    
    render(){
        return (
            <div className="container">
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter basename="/portfolio/app">
        <App />
    </BrowserRouter>,
    app
);
import React from 'react';

import Home from './Home';
import About from './About';
import Topics from './Topics';

import { Route } from 'react-router-dom' 

const Container = () => (
    <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
    </div>
  )

  export default Container;
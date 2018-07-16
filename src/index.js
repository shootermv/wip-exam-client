import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// routes
import Home from './home/Home';
import Contact from './contact/Contact';
import About from './about/About';

// components
import Navigation from './Navigation';

import './style.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css'; 


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
       <Router> 
         <div>
          <Navigation/>
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={Contact} /> 
         </div>
       </Router> 
    );
  }
}

render(<App />, document.getElementById('root'));

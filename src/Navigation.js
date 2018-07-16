import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , NavLink} from "react-router-dom";

export default () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
         <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
         <nav  className="my-2 my-md-0 mr-md-3">
           
                <NavLink className="btn" activeClassName="btn-primary" exact={true}  to="/">
                Home
                </NavLink>
            
                <NavLink className="btn" activeClassName="btn-primary"  to="/about">
                  About
                </NavLink>
           
                <NavLink className="btn" activeClassName="btn-primary"  to="/contact">
                  contact
                </NavLink>
             
          </nav>
  </div>
);
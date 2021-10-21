import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink activeClassName="active" to="/" className="navbar-brand" >
              <i className="fas fa-book-open icon__book"></i>
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse font-weight-bold  " id="collapsibleNavId">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item ">
                  <NavLink activeClassName="active" to="/Html" className="nav-link" > Html <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/css" className="nav-link" >Css</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/javascript" className="nav-link" >Javascript</NavLink>
                </li> 
                 <li className="nav-item">
                  <NavLink activeClassName="active" to="/react" className="nav-link" >React</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/nodejs" className="nav-link" >NodeJs</NavLink>
                </li>

              </ul>

            </div>
          </nav>
        )
    }
}

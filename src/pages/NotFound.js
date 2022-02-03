import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import notFoundLogo from '../assets/404error.jpg';


class NotFound extends Component {
  render() {

    return(
       <>
         
          <img src = {notFoundLogo} alt = "logo" height="450px" width="600px" ></img>
          <ul className="navbar-nav me-auto order-0">
            <NavLink to = "/">Go To Homepage</NavLink>
          </ul>
       </>
       
    )
  }
}

export default NotFound
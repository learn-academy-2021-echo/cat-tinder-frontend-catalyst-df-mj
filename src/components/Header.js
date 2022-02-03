import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

class Header extends Component {
  render() {
    return(
        <>
          <header>
            <section className='header'>
                <NavLink to = "/" >
                </NavLink>
            </section>  

              <section className='navbar'>
                 <div className='nav-links'>
                   <ul className="navbar-nav me-auto order-0">
                     <NavLink to = "/catindex" className='navitem'>We are all cats</NavLink>  
                   </ul>
                   <ul className="navbar-nav me-auto order-0"> 
                     <NavLink to = "/catnew" className='navitem'>Cats are fun</NavLink>
                   </ul>
                </div>
                <hr className='header-separator'/>
              </section>
            </header>
        </>
    )
  }
}

export default Header;
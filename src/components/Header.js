import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <section className="header">
            <NavLink to="/">Home</NavLink>
          </section>

          <section className="navbar">
            <div className="nav-links">
              <ul className="navbar-nav me-auto order-0">
                <NavLink to="/catindex" className="navitem">
                  See All Our Cats
                </NavLink>
              </ul>

              <ul className="navbar-nav me-auto order-0">
                <NavLink to="/catnew" className="navitem">
                  Add A Cat
                </NavLink>
              </ul>

              {/* <ul className="navbar-nav me-auto order-0">
                <NavLink to="/catedit" className="navitem">
                  Edit A Cat
                </NavLink>
              </ul> */}
            </div>

            <hr className="header-separator" />
          </section>
        </header>
      </>
    );
  }
}

export default Header;

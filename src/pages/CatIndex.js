import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class CatIndex extends Component {
  render() {
    const { cats } = this.props;
    return (
      <section className="meetCats">
        <h1>Meet Our Cats!</h1>
        <ul>
          {cats.map((cat) => {
            return (
              <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                <li className="catName" key={cat.id}>
                  {cat.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default CatIndex;

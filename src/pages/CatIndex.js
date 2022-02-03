import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CatIndex extends Component {
  render() {
    return (
      <>
        <h2>This is CatIndex</h2>
        {this.props.cat &&
          this.props.cats.map((cat) => {
            return (
              <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                <p>{cat.name}</p>
              </NavLink>
            );
          })}
      </>
    );
  }
}

export default CatIndex;

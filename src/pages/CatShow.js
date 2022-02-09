import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class CatShow extends Component {
  render() {
    const { cat } = this.props;
    return (
      <>
        <h3>Meet {this.props.cat.name}!</h3>
        {cat && (
          <>
            <p>{this.props.cat.name}</p>
            <p>{this.props.cat.age}</p>
            <p>{this.props.cat.enjoys}</p>
            <img src={this.props.cat.image} width="300px"></img>
          </>
        )}
      </>
    );
  }
}

export default CatShow;

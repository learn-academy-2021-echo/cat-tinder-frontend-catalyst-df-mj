import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <>
        <section className="home">
          <h1>Cat Tinder by CATalyst</h1>
          <h3>Find your King or Queen today</h3>;
          <img
            src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1644350103/Cat%20Tinder/il_1588xN.3162142982_8bqs_nyaas2.jpg"
            width="300px"
          />
          <img
            src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1644350324/Cat%20Tinder/il_1588xN.3015003196_e6c4_lc31zl.webp"
            width="450px"
          />
        </section>
      </>
    );
  }
}
export default Home;

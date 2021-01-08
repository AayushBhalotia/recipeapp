import React, { Component } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Carouselcontainer from "../components/Carouselcontainer";
import "../assets/css/style.css";

class Main extends Component {
  render() {
    return (
      <>
        <div>
          <Header></Header>
        </div>

        <div className="page">
          <Carouselcontainer></Carouselcontainer>
        </div>
        <div className="page">
          <Search></Search>
        </div>
      </>
    );
  }
}

export default Main;

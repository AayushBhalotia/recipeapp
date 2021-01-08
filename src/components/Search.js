import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/css/style.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: "",
      item2: "",
    };
  }
  handleItem1Change = (event) => {
    this.setState({
      item1: event.target.value,
    });
  };
  handleItem2Change = (event) => {
    this.setState({
      item2: event.target.value,
    });
  };
  handlerSubmit = (event) => {
    event.preventDefault();
    this.props.get_data(this.state);
    document.getElementsByClassName("search")[0].style.display = "none";
    document.getElementsByClassName("loader")[0].style.display = "flex";
  };

  handleTry = (e) => {
    e.preventDefault();
    document.getElementsByClassName("search")[0].style.display = "flex";
    document.getElementsByClassName("invalid-input")[0].style.display = "none";
  };

  render() {
    return (
      <div>
        <div className="inputform">
          <form id="myForm" onSubmit={this.handlerSubmit} className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={this.state.item1}
              onChange={this.handleItem1Change}
              required
            ></input>

            <input
              className="search-input"
              placeholder="Search"
              type="text"
              value={this.state.item2}
              onChange={this.handleItem2Change}
              required
            ></input>

            <button className="button-class" type="submit">
              Submit
            </button>
          </form>

          <div className="loader">
            <div class="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="invalid-input">
            <h2>OPPS! No recipe found for this ingredient combination</h2>
            <button className="try-again" onClick={this.handleTry}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_data: (data) => {
      console.log("data from getdata", data);
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = `http://www.recipepuppy.com/api/?i=${data.item1}&q=${data.item2}`;
      console.log(url);
      fetch(proxyurl + url)
        .then((data) => data.json())
        .then((response) => {
          console.log(response.results);
          let dummy = response.results;
          document.getElementsByClassName("loader")[0].style.display = "none";
          if (dummy.length === 0) {
            document.getElementsByClassName("invalid-input")[0].style.display =
              "flex";
            document.getElementsByClassName("loader")[0].style.display = "none";
          } else {
            dispatch({ type: "GET_DATA", payload: response.results });
            document.getElementsByClassName("search")[0].style.display = "flex";
          }
        })
        .catch((e) => {
          console.log(e);
          document.getElementsByClassName("loader")[0].style.display = "none";
          document.getElementsByClassName("search")[0].style.display = "flex";
          alert("Server Error!");
        });
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);

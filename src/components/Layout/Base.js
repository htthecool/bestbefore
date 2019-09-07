import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleactive: true
    };
    this.updateValue = this.updateValue.bind(this);
  }
  updateValue(value) {
    this.setState(prevState => ({
      toggleactive: !prevState.toggleactive
    }));
  }
  render() {
    console.log("location", location);
    return (
      <div
        className={this.state.toggleactive ? "wrapper  slide-menu" : "wrapper"}
      >
        <Header path={location.pathname} updateParent={this.updateValue} />
        <div className="container-fluid">
          <div className="row">
            <div style={{ margin: "0px" }} className="content-wrapper">
              {this.props.children}

              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Base;

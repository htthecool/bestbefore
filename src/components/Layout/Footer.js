import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      //<!--================================= footer -->

      <footer className="bg-white p-4">
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img style={{ width: "90px" }} src="assets/images/logo.png" alt="" />
        </Row>
        <Row>
          <Col md={6}>
            <div className="text-center text-md-left">
              <p className="mb-0">
                {" "}
                © Copyright <span id="copyright"> 2019</span>.{" "}
                <a href="/"> Best Before </a>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center text-md-left">
              <p className="mb-0">All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}
export default Footer;

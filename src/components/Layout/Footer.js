import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      //<!--================================= footer -->

      <footer className="bg-white p-4">
        <Row>
          <Col md={6}>
            <div className="text-center text-md-left">
              <p className="mb-0">
                {" "}
                © Copyright <span id="copyright"> 2019</span>.{" "}
                <a href="#"> Best Before </a> All Rights Reserved.{" "}
              </p>
            </div>
          </Col>
          <Col md={6}>
            <ul className="text-center text-md-right">
              <li className="list-inline-item">
                <a href="#">Terms &amp; Conditions </a>{" "}
              </li>
              <li className="list-inline-item">
                <a href="#">API Use Policy </a>{" "}
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy </a>{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    );
  }
}
export default Footer;

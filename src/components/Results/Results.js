import React from "react";
import {
  Button,
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  InputGroup,
  Alert,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import "./Results.css";

const products = require("./stock_new.json");
class Results extends React.Component {
  constructor() {
    super();

    this.caretdemo = this.caretdemo.bind(this);

    this.state = {
      caretdemo: false
    };
  }
  caretdemo() {
    this.setState(prevState => ({
      caretdemo: !prevState.caretdemo
    }));
  }
  render() {
    console.log("products", products);
    return (
      <div>
        <div className="page-title">
          <Row style={{ padding: "40px 0px 30px 0px" }}>
            <Col md={3}></Col>
            <Col sm={3}>
              <input
                type="text"
                className="form-control filterSearchInput"
                id="formGroupExampleInput"
                placeholder="Search"
              />
            </Col>
            <Col style={{ display: "flex", alignItems: "center" }} md={3}>
              <Dropdown
                style={{ backgroundColor: "#37a289" }}
                isOpen={this.state.caretdemo}
                toggle={this.caretdemo}
              >
                <DropdownToggle caret>Distance</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>0.5 miles</DropdownItem>
                  <DropdownItem>2 miles</DropdownItem>
                  <DropdownItem>5 miles</DropdownItem>
                  <DropdownItem>10 miles</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col sm={3}>
              <Button
                style={{
                  width: "50%",
                  padding: "10px",
                  backgroundColor: "#e6e6e6",
                  color: "#333",
                  border: "none"
                }}
                className="button pull-right"
              >
                Checkout
              </Button>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={3} className="mb-30">
            <Card
              className="card-statistics"
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <CardBody
                style={{
                  background: "transparent",
                  boxShadow: "none",
                  paddingBottom: "200px",
                  paddingTop: "0px"
                }}
                className="extras"
              >
                <h3 className="filterSectionHeading">Product Groups</h3>
                <Row style={{ padding: "10px 0px 5px 0px" }}>
                  <input
                    type="text"
                    className="form-control filterSearchInput"
                    id="formGroupExampleInput"
                    placeholder="Search"
                  />
                </Row>

                <h4 style={{ paddingTop: "20px" }} className="filterHeading">
                  Dietary
                </h4>
                <Row style={{ padding: "5px 0px 5px 0px" }}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      {" "}
                      <InputGroupText>
                        <input type="checkbox" />{" "}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Vegan" disabled />
                  </InputGroup>
                </Row>
                <Row style={{ padding: "5px 0px 5px 0px" }}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      {" "}
                      <InputGroupText>
                        <input type="checkbox" />{" "}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Vegetarian" disabled />
                  </InputGroup>
                </Row>
                <Row style={{ padding: "5px 0px 5px 0px" }}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      {" "}
                      <InputGroupText>
                        <input type="checkbox" />{" "}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Gluten Free" disabled />
                  </InputGroup>
                </Row>

                <h4 style={{ paddingTop: "20px" }} className="filterHeading">
                  Extras
                </h4>
                <Row style={{ padding: "5px 0px 5px 0px" }}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      {" "}
                      <InputGroupText>
                        <input type="checkbox" />{" "}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Organice" disabled />
                  </InputGroup>
                </Row>
                <Row style={{ padding: "5px 0px 5px 0px" }}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      {" "}
                      <InputGroupText>
                        <input type="checkbox" />{" "}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Fair Trade" disabled />
                  </InputGroup>
                </Row>
                <div className="logodiv">
                  <img src="src/assets/images/textlogozomp.png" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={9} className="mb-30">
            <Row>
              {products.map((product, idx) => (
                <Col
                  style={{ paddingLeft: "0px" }}
                  key={idx}
                  md={4}
                  className="mb-30"
                >
                  <Card
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px"
                    }}
                    className="card-statistics"
                  >
                    <CardBody>
                      <h2 className="productTitle">{product.Description}</h2>
                      <h5 className="productQuantity">
                        {product.NetWeightKg} kg
                      </h5>
                      <div className="productImageWrapper">
                        <img
                          src={`assets/images/products/${product.Picture}`}
                        />
                      </div>
                      <h5 className="productInStock">{product.inStock} stk.</h5>
                      <h5 className="productBestBefore">
                        Best before: {product.expiryDates}
                      </h5>
                      <h5 className="productRRP">
                        RRP: €{product.recommendedRetailPrice}
                      </h5>
                      <h5 className="productDiscounted">
                        Discounted: €{product.Price}
                      </h5>
                      <Row
                        style={{ paddingTop: "30px", paddingBottom: "20px" }}
                      >
                        <Col md={4}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Qty"
                          />
                        </Col>
                        <Col md={8}>
                          <Button
                            style={{ width: "100%", padding: "10px" }}
                            className="button"
                          >
                            ADD TO CART
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Results;

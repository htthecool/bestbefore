import React from "react";
import {
  Button,
  Row,
  Col,
  Card,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  InputGroup,
  Alert,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import "./Results.css";

const products = require("./stock_new.json");
class Results extends React.Component {
  render() {
    console.log("products", products);
    return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0">Results</h4>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-left float-sm-right">
                <BreadcrumbItem>
                  <a href="#">Results</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Results</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={3} className="mb-30">
            <Card className="card-statistics">
              <CardBody className="extras">
                <div style={{ height: "90px", width: "100%" }}>
                  <label htmlFor="formGroupExampleInput">Product Groups</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Search" />
                  </div>
                <Alert color="light">Dietary</Alert>
                <InputGroup>
                  <InputGroupAddon className="check" addonType="prepend">  <InputGroupText><input type="checkbox" />  </InputGroupText>
                  </InputGroupAddon>
                  <p>Vegan</p>
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon className="check" addonType="prepend">  <InputGroupText><input type="checkbox" />  </InputGroupText>
                  </InputGroupAddon>
                  <p>Vegetarian</p>
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon className="check" addonType="prepend">  <InputGroupText><input type="checkbox" />  </InputGroupText>
                  </InputGroupAddon>
                  <p>Gluten Free</p>
                </InputGroup>
                <Alert color="light">Extras</Alert>
                <InputGroup>
                  <InputGroupAddon className="check" addonType="prepend">  <InputGroupText><input type="checkbox" />  </InputGroupText>
                  </InputGroupAddon>
                  <p>Organic</p>
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon className="check" addonType="prepend">  <InputGroupText><input type="checkbox" />  </InputGroupText>
                  </InputGroupAddon>
                  <p>Fair Trade</p>
                </InputGroup>
                <div className="logodiv"><img src="src/assets/images/textlogozomp.png"/></div>
                
              </CardBody>
            </Card>
          </Col>
          <Col md={9} className="mb-30">
            <Row>
              {products.map((product, idx) => (
                <Col key={idx} md={4} className="mb-30">
                  <Card
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
                        <Col md={5}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Qty"
                          />
                        </Col>
                        <Col md={7}>
                          <Button style={{ width: "100%" }} className="button">
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

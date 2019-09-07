import React, { Component } from 'react';
import { Row, Col, InputGroupAddon, Card, CardBody, CardTitle, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Button, InputGroupText, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';


class Formgroups extends React.Component {

  constructor(props) {
    super(props);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.prependtoggleDropDown = this.prependtoggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      prependdropdownOpen: false,
      splitButtonOpen: false
    };
  }
  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  prependtoggleDropDown() {
    this.setState({
      prependdropdownOpen: !this.state.prependdropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  render() {
    return (

      <div>
        <Row className="page-title">
          <Col sm={6}>
            <h4 className="mb-0">Input Group</h4>
          </Col>
          <Col sm={6} >
            <Breadcrumb className="float-left float-sm-right">
              <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
              <BreadcrumbItem active> Input Group</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>

        {/* main body */}
        <Row>
          <Col md={6} >
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Basic Input Group</CardTitle>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                  <Input placeholder="username" />
                </InputGroup>
                <br />
                <InputGroup>
                  <Input placeholder="username" />
                  <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">https://example.com/users/</InputGroupAddon>
                  <Input placeholder="email" />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input placeholder="Amount" type="number" step="1" />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
              </CardBody>
            </Card>
            <Card className=" card-statistics mb-30">
              <CardBody>
                <CardTitle>Sizing</CardTitle>
                <InputGroup size="lg">
                  <InputGroupAddon addonType="prepend">Large text</InputGroupAddon>
                  <Input />
                </InputGroup>
                <br />
                <InputGroup >
                  <InputGroupAddon addonType="prepend">Normal text</InputGroupAddon>
                  <Input />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                  <InputGroupAddon addonType="prepend">Small text</InputGroupAddon>
                  <Input />
                </InputGroup>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Checkboxes and radios</CardTitle>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>

                      <input type="radio" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="username" />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">  <InputGroupText><input type="checkbox" />  </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="username" />
                </InputGroup>
              </CardBody>
            </Card>
          </Col>

          <Col md={6} >
            <Card className=" card-statistics mb-30">
              <CardBody>
                <CardTitle>Button addons </CardTitle>
                <InputGroup>
                  <InputGroupAddon addonType="prepend"> <Button color="primary" >Button</Button>
                  </InputGroupAddon>
                  <Input />
                </InputGroup>
                <br />
                <InputGroup>
                  <Input placeholder="username" />
                  <InputGroupAddon addonType="append">    <Button color="success" >Button</Button>
                  </InputGroupAddon>
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend"> <Button color="info"  >Button</Button>
                    <Button color="success" >Button</Button>
                  </InputGroupAddon>
                  <Input />
                </InputGroup>
                <br />
                <InputGroup>
                  <Input placeholder="username" />
                  <InputGroupAddon addonType="append"> <Button color="primary" >Button</Button>
                    <Button color="danger" >Button</Button>
                  </InputGroupAddon>
                </InputGroup>
                <br />
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Buttons with dropdowns </CardTitle>
                <InputGroup>
                  <Input />
                  <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                    <DropdownToggle color="info" caret>
                      Dropdown
                  </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </InputGroupButtonDropdown>
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.prependdropdownOpen} toggle={this.prependtoggleDropDown}>
                    <DropdownToggle color="success" caret>
                      Dropdown
                  </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </InputGroupButtonDropdown>
                  <Input />
                </InputGroup>
              </CardBody>
            </Card>

            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Validation states </CardTitle>
                <InputGroup>
                  <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                    <Button outline color="success" >Dropdown</Button>
                    <DropdownToggle color="success" split outline />
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </InputGroupButtonDropdown>
                  <Input placeholder="and..." />
                  <InputGroupAddon addonType="append"><Button color="primary" >Button</Button></InputGroupAddon>
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default Formgroups;
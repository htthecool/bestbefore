import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Forminputs.css';

class Forminputs extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      value: '',
      emailaddress: '',
      selectexample: '',
      selectmultiple: '',
      textarea: '',
      fileupload: '',
      horizontalradio: true,
      horizontalcheck: true,
      gridRadios: true,
      horizontalemail: '',
      horizontalpassword: '',
      checkout: true
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }
  horizontalhandleSubmit(event) {
    alert('A name was submitted: ' + this.state.horizontalemail);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Row className="page-title">
          <Col sm={6}>
            <h4 className="mb-0">Form Input</h4>
          </Col>
          <Col sm={6} >
            <Breadcrumb className="float-left float-sm-right">
              <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
              <BreadcrumbItem active>Form Input</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className=" card-statistics mb-30">
              <CardBody>
                <CardTitle>Basic form</CardTitle>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.onChange} name="email" value={this.state.email} aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onChange} name="password" value={this.state.password} placeholder="Password" />
                  </div>
                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={this.state.checkout} onChange={this.onChange} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Form controls </CardTitle>
                <p className="mb-30">Textual form controls—like <code className="highlighter-rouge">&lt;input&gt;</code>s, <code className="highlighter-rouge">&lt;select&gt;</code>s, and <code className="highlighter-rouge">&lt;textarea&gt;</code>s—are styled with the <code className="highlighter-rouge">.form-control</code> class. Included are styles for general appearance, focus state, sizing, and more.</p>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={this.onChange} name="emailaddress" value={this.state.emailaddress} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChange} name="selectexample" value={this.state.selectexample}  >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple={true} className="form-control" id="exampleFormControlSelect2" onChange={this.onChange} name="selectmultiple" >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} name="textarea" onChange={this.onChange} />
                  </div>
                </form>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="fileupload" onChange={this.onChange} value={this.state.fileupload} />
                  </div>
                </form>
              </CardBody>
            </Card>

            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Readonly </CardTitle>
                <input className="form-control" type="text" placeholder="Readonly input here…" readOnly />
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Readonly plain text </CardTitle>
                <form>
                  <Row className="form-group">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <Col sm={10} >
                      <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
                    </Col>
                  </Row>
                  <Row className="form-group ">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <Col sm={10} >
                      <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} mb={30}>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Horizontal form </CardTitle>
                <form onSubmit={this.horizontalhandleSubmit}>
                  <Row className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <Col sm={10} >
                      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={this.onChange} name="horizontalemail" value={this.state.horizontalemail} />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <Col sm={10} >
                      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={this.onChange} name="horizontalpassword" value={this.state.horizontalpassword} />
                    </Col>
                  </Row>
                  <div className="form-group row">
                    <div className="col-sm-2">Radio</div>
                    <Col sm={10} >
                      <div className="form-check">
                        <input className="form-check-input" type="radio" id="gridRadio1" onChange={this.onChange} value={this.state.horizontalradio} />
                        <label className="form-check-label" htmlFor="gridRadio1">
                          Example checkbox
                            </label>
                      </div>
                    </Col>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-2">Checkbox</div>
                    <Col sm={10} >
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" onChange={this.onChange} value={this.state.horizontalcheck} />
                        <label className="form-check-label" htmlFor="gridCheck1">
                          Example checkbox
                            </label>
                      </div>
                    </Col>
                  </div>
                  <div className="form-group row">
                    <Col sm={10} >
                      <button type="submit" className="btn btn-primary">Sign in</button>
                    </Col>
                  </div>
                </form>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Form groups </CardTitle>
                <form>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Example label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Another label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                  </div>
                </form>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Form groups </CardTitle>
                <form>
                  <Row>
                    <Col>
                      <input type="text" className="form-control" placeholder="First name" />
                    </Col>
                    <Col>
                      <input type="text" className="form-control" placeholder="Last name" />
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Form row</CardTitle>
                <form>
                  <div className="form-row">
                    <Col>
                      <input type="text" className="form-control" placeholder="First name" />
                    </Col>
                    <Col>
                      <input type="text" className="form-control" placeholder="Last name" />
                    </Col>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Password</label>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">City</label>
                      <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">State</label>
                      <select id="inputState" className="form-control" >
                        <option>Choose</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Himachal Pradesh</option>
                        <option>Madhya Pradesh</option>
                        <option>Maharashtra</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input type="text" className="form-control" id="inputZip" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                          </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Forminputs;
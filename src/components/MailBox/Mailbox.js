import React from 'react';
import {Row,Col,Card,CardBody,NavItem,Nav,Tab,MenuItem,Breadcrumb,BreadcrumbItem,Dropdown,DropdownItem,DropdownMenu,DropdownToggle,TabContent,TabPane } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react';
import ScrollArea  from 'react-scrollbar';
import './Mailbox.css';

class Mailbox extends React.Component{

    constructor(props)
    {
        super(props);
        this.toggle=this.toggle.bind(this);
        this.chatdropdown=this.chatdropdown.bind(this);
        this.mainlists=this.mainlists.bind(this);
        this.onChange=this.onChange.bind(this);
        this.state = {
            activeTab: '1',
            name:'Anne Smith',
            chatdropdown:false,
            mainlist:'Inbox'
          };
        }
      
    toggle(tab,name) {
        if (this.state.activeTab !== tab) {
        this.setState({
            activeTab: tab,
            name:name
        });
        }
    }
    mainlists(tab) {
        if (this.state.mainlist !== tab) {
        this.setState({
            mainlist: tab
        });
        }
    }
    chatdropdown()
    {
      this.setState(prevState => ({
        chatdropdown:!this.state.chatdropdown
      }));
    }
    onChange(content) {
      console.log('onChange', content);
    }
  
    render(){
        return(

            <div>
            <div className="page-title">
                <Row>
                     <Col sm={6}>
                         <h4 className="mb-0"> Mail Box</h4>
                     </Col>
                     <Col sm={6}>
                           <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                      <BreadcrumbItem><a href="javascript:void(0);">Home</a></BreadcrumbItem>
                                      <BreadcrumbItem active>Mail box</BreadcrumbItem>
                              </Breadcrumb>     
                     </Col>
                 </Row>
            </div>
            {/* main body */} 
            <Row>   
              <Col md={12} className="mb-30">     
                <Card className=" card-statistics h-100"> 
                    <CardBody>
                    <Row>
                        <Col sm={12} md={4} lg={4} xl={2}>
                        <div className="mb-30">
                          <a className="button btn-block icon" href="javascript:void(0);"> Compose <i className="fa fa-envelope-o" /> </a>
                        </div>
                        <div className="mail-nav">
                          <h6 className="mb-3 title">Messages</h6>
                          
                          <ul className="list-unstyled">
                            <NavItem   onClick={() => { this.mainlists('Inbox'); }}  >
                                <a href="javascript:void(0);"> <i className="fa fa-inbox" /> Inbox <span className="badge badge-pill badge-success float-right">12</span> </a>
                            </NavItem>
                            <NavItem    onClick={() => { this.mainlists('Sent'); }}  >
                                <a href="javascript:void(0);"> <i className="fa fa-paper-plane-o" /> Sent</a>
                            </NavItem>
                            <NavItem   onClick={() => { this.mainlists('Drafts'); }}  >
                                <a href="javascript:void(0);"> <i className="fa fa-file-o" /> Drafts <span className="badge badge-pill badge-danger float-right">20</span></a>
                            </NavItem>
                            <NavItem   onClick={() => { this.mainlists('Trash'); }}  >
                                <a href="javascript:void(0);"> <i className="fa fa-trash-o" /> Trash</a>
                                </NavItem>
                            <NavItem    onClick={() => { this.mainlists('Important'); }}  >
                                <a href="javascript:void(0);"> <i className="fa fa-info-circle" /> Important <span className="badge badge-pill badge-warning float-right">50</span></a>
                            </NavItem>
                            <NavItem   onClick={() => { this.mainlists('spam'); }}  >
                                <a href="javascript:void(0);"> <i className="fa fa-envelope-o" /> spam</a>
                            </NavItem>
                            <NavItem   onClick={() => { this.mainlists('Starred'); }}  >
                                <a href="javascript:void(0);"> <i className="fa fa-star-o" /> Starred</a>
                            </NavItem>
                          </ul>
                          <h6 className="mb-3 title">Label</h6>
                          <ul className="list-unstyled">
                            <li><a href="javascript:void(0);"> <i className="fa fa-circle-o text-warning" /> Private</a></li>
                            <li><a href="javascript:void(0);"> <i className="fa fa-circle-o text-danger" /> Family <span className="badge badge-pill badge-primary float-right">06</span> </a></li>
                            <li><a href="javascript:void(0);"> <i className="fa fa-circle-o text-info" /> Teachers</a></li>
                            <li><a href="javascript:void(0);"> <i className="fa fa-circle-o text-primary" /> Friend <span className="badge badge-pill badge-info float-right">80</span></a></li>
                            <li><a href="javascript:void(0);"> <i className="fa fa-circle-o text-dark" /> Work</a></li>
                          </ul>
                        </div>
                      </Col>
                      <Col sm={12} md={8} lg={8} xl={4}>
                        <div className="widget-search mb-30">
                          <i className="fa fa-search" />
                          <input type="search" className="form-control" placeholder="Search...." />
                        </div>
                        <TabContent activeTab={this.state.mainlist}>
                           <TabPane tabId="Inbox">
                        <ScrollArea className=" max-h-600">
                          <ul className="list-unstyled">
                            <NavItem    onClick={() => { this.toggle('1','Martin smith'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/01.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Martin smith <small className="float-right"> 22 May</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-primary">Private</span>
                                    </div> 
                                    <p className="text-muted"> We know this in our </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('2','Paul Flavius'); }}  className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative clearfix">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/02.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius  <small className="float-right">25-03-18</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-success">Family</span>
                                    </div> 
                                    <p className="text-muted">Use a past defeat</p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('3','Anne Smith'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Anne Smith  <small className="float-right text-primary">25-03-18</small> </h6>
                                    <div className="float-right text-muted">
                                      <i className="fa fa-star-o pr-1" />
                                    </div> 
                                    <p className="text-muted"> As a motivator </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('4','Sara Lisbon'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/04.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right text-warning">15 Feb</small> </h6>
                                    <div className="float-right text-muted">
                                      <i className="fa fa-star-o pr-1" />
                                    </div> 
                                    <p className="text-muted">Remind yourself you. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('5','Michael Bean'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Michael Bean  <small className="float-right">26 Jan</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-warning">Teachers</span>
                                    </div> 
                                    <p className="text-muted">Have nowhere to </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('6','Sara Lisbon'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/06.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right">12-01-18</small> </h6>
                                    <p className="text-muted"> Go except up as </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('7','Paul Flavius'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/07.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius  <small className="float-right">14-02-18</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-danger">Friend </span>
                                    </div> 
                                    <p className="text-muted"> You have already. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem   onClick={() => { this.toggle('8','Sara Lisbon'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/08.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right">26-12-17</small> </h6>
                                    <p className="text-muted">Been at the bottom. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem   onClick={() => { this.toggle('9','Paul Flavius'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius <small className="float-right">25 May</small> </h6>
                                    <p className="text-muted">Give yourself the</p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                          </ul>
                        </ScrollArea>
                        </TabPane>
                        <TabPane tabId="Sent">
                        <ScrollArea className=" max-h-600">
                          <ul className="list-unstyled">
                            <NavItem  onClick={() => { this.toggle('4','Sara Lisbon'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/04.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right text-warning">15 Feb</small> </h6>
                                    <div className="float-right text-muted">
                                      <i className="fa fa-star-o pr-1" />
                                    </div> 
                                    <p className="text-muted">Remind yourself you. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('5','Michael Bean'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Michael Bean  <small className="float-right">26 Jan</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-warning">Teachers</span>
                                    </div> 
                                    <p className="text-muted">Have nowhere to </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem   onClick={() => { this.toggle('6','Sara Lisbon'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/06.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right">12-01-18</small> </h6>
                                    <p className="text-muted"> Go except up as </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('7','Paul Flavius'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/07.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius  <small className="float-right">14-02-18</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-danger">Friend </span>
                                    </div> 
                                    <p className="text-muted"> You have already. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem   onClick={() => { this.toggle('8','Sara Lisbon'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/08.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right">26-12-17</small> </h6>
                                    <p className="text-muted">Been at the bottom. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem onClick={() => { this.toggle('9','Paul Flavius'); }} className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius <small className="float-right">25 May</small> </h6>
                                    <p className="text-muted">Give yourself the</p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                          </ul>
                        </ScrollArea>
                        </TabPane>
                        <TabPane tabId="Drafts">
                        <ScrollArea className=" max-h-600">
                          <ul className="list-unstyled">
                            <NavItem    onClick={() => { this.toggle('2','Paul Flavius'); }}  className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative clearfix">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/02.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius  <small className="float-right">25-03-18</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-success">Family</span>
                                    </div> 
                                    <p className="text-muted">Use a past defeat</p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem   onClick={() => { this.toggle('5','Michael Bean'); }}  className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Michael Bean  <small className="float-right">26 Jan</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-warning">Teachers</span>
                                    </div> 
                                    <p className="text-muted">Have nowhere to </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('6','Sara Lisbon'); }}  className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/06.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right">12-01-18</small> </h6>
                                    <p className="text-muted"> Go except up as </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('7','Paul Flavius'); }}  className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/07.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius  <small className="float-right">14-02-18</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-danger">Friend </span>
                                    </div> 
                                    <p className="text-muted"> You have already. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem   onClick={() => { this.toggle('8','Sara Lisbon'); }}  className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/08.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right">26-12-17</small> </h6>
                                    <p className="text-muted">Been at the bottom. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem   onClick={() => { this.toggle('9','Paul Flavius'); }}  className="pt-15">
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius <small className="float-right">25 May</small> </h6>
                                    <p className="text-muted">Give yourself the</p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                          </ul>
                        </ScrollArea>
                        </TabPane>
                        <TabPane tabId="Trash">
                        <ScrollArea className=" max-h-600">
                          <ul className="list-unstyled">
                           
                            <NavItem    onClick={() => { this.toggle('8','Sara Lisbon'); }}>
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/08.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right">26-12-17</small> </h6>
                                    <p className="text-muted">Been at the bottom. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem   onClick={() => { this.toggle('9','Paul Flavius'); }} >
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius <small className="float-right">25 May</small> </h6>
                                    <p className="text-muted">Give yourself the</p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                          </ul>
                        </ScrollArea>
                        </TabPane>
                        <TabPane tabId="Important">
                        <ScrollArea className=" max-h-600">
                          <ul className="list-unstyled">
                           
                          <NavItem  onClick={() => { this.toggle('6','Sara Lisbon'); }}>
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/06.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right">12-01-18</small> </h6>
                                    <p className="text-muted"> Go except up as </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem  onClick={() => { this.toggle('7','Paul Flavius'); }}>
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/07.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Paul Flavius  <small className="float-right">14-02-18</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-danger">Friend </span>
                                    </div> 
                                    <p className="text-muted"> You have already. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                          </ul>
                        </ScrollArea>
                        </TabPane>
                        <TabPane tabId="spam">
                        <ScrollArea className=" max-h-600">
                          <ul className="list-unstyled">
                           
                          <NavItem    onClick={() => { this.toggle('3','Anne Smith'); }}>
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Anne Smith  <small className="float-right text-primary">25-03-18</small> </h6>
                                    <div className="float-right text-muted">
                                      <i className="fa fa-star-o pr-1" />
                                    </div> 
                                    <p className="text-muted"> As a motivator </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem  onClick={() => { this.toggle('4','Sara Lisbon'); }}>
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/04.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Sara Lisbon  <small className="float-right text-warning">15 Feb</small> </h6>
                                    <div className="float-right text-muted">
                                      <i className="fa fa-star-o pr-1" />
                                    </div> 
                                    <p className="text-muted">Remind yourself you. </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                            <NavItem    onClick={() => { this.toggle('5','Michael Bean'); }}>
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Michael Bean  <small className="float-right">26 Jan</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-warning">Teachers</span>
                                    </div> 
                                    <p className="text-muted">Have nowhere to </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                          </ul>
                        </ScrollArea>
                        </TabPane>
                        <TabPane tabId="Starred">
                        <ScrollArea className=" max-h-600">
                          <ul className="list-unstyled">
                    
                            <NavItem    onClick={() => { this.toggle('5','Michael Bean'); }}>
                              <a href="javascript:void(0);">
                                <div className="media px-2">
                                  <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="img-fluid" />
                                  </div> 
                                  <div className="media-body">
                                    <h6 className="mt-0 ">Michael Bean  <small className="float-right">26 Jan</small> </h6>
                                    <div className="float-right">
                                      <span className="badge badge-pill badge-warning">Teachers</span>
                                    </div> 
                                    <p className="text-muted">Have nowhere to </p>
                                  </div>
                                </div>
                              </a>
                              <div className="divider mt-15" />
                            </NavItem>
                          </ul>
                        </ScrollArea>
                        </TabPane>
                        </TabContent>
                      </Col>
                      <Col sm={12} md={12} lg={12} xl={6}>
                        <div className="mail-topbar clearfix mb-4">
                            <ul className="list-unstyled mb-0 d-inline-block">
                                <li> <a href="javascript:void(0);"> <i className="fa fa-archive" /> </a> </li>
                                <li> <a href="javascript:void(0);"> <i className="fa fa-question-circle" /> </a> </li>
                                <li> <a href="javascript:void(0);"> <i className="fa fa-trash" /> </a> </li>
                                <li> <a href="javascript:void(0);"> <i className="fa fa-folder-open" /> </a> </li>
                                <li> <a href="javascript:void(0);"> <i className="fa fa-tags" /> </a> </li>
                          </ul>
                          <div className="ml-3 d-inline-block"> 
                             <Dropdown isOpen={this.state.chatdropdown} toggle={this.chatdropdown}>
                                  <DropdownToggle  color="primary" caret > More
                                  </DropdownToggle>
                                  <DropdownMenu>
                                      <DropdownItem>Inbox</DropdownItem>
                                      <DropdownItem>Sent</DropdownItem>
                                      <DropdownItem>Drafts</DropdownItem>
                                      <DropdownItem>Trash</DropdownItem>
                                      <DropdownItem>Important</DropdownItem>
                                      <DropdownItem>spam</DropdownItem>
                                      <DropdownItem>Starred</DropdownItem>
                                                               
                                  </DropdownMenu>
                                </Dropdown>                       
                          </div>
                          <ul className="list-unstyled mb-0 float-right">
                            <li> <a href="javascript:void(0);"> <i className="fa fa-chevron-left" /> </a> </li>
                            <li> <a href="javascript:void(0);"> <i className="fa fa-chevron-right" /> </a> </li>
                          </ul>
                        </div>
                        <TabContent activeTab={this.state.activeTab}>
                           <TabPane tabId="1">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/01.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">martinsmith@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="2">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/02.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">Paulavius256@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="3">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">annesmith1552@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="4">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/04.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">saralisbon854@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="5">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">michaelbean256@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="6">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/06.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">saralisbon424@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="7">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/07.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">paulelavius256@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="8">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/08.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">saralisbon256@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="9">
                                <div className="mail-body">
                                <div className="mb-4 d-block">
                                    <h4 className="d-inline-block">We know this in our </h4><span className="badge badge-pill badge-danger ml-3">Friend </span>
                                </div>
                                <div className="media px-2">
                                    <div className="position-relative">
                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                    </div> 
                                    <div className="media-body">
                                    <h6 className="mt-0 d-inline-block">{this.state.name}, </h6> <a className="pl-2 text-muted" href="javascript:void(0);">paulflavius78@gmail.com</a> 
                                    <p className="text-dark"> To <b>Me</b> </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>Hi Sir,</p>
                                    <p>Give yourself the power of responsibility</p>
                                    <p>Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.</p>
                                    <p className="mt-20">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck, coincidence or fate. It really comes down to understanding the steps in the process and then executing on those steps.
                                    There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                                    <div className="divider my-4" />
                                    <Editor apiKey="tw738oi7eejqelkvij9eko7n5fnt0xd7v90seimw8zjvehzc" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                    <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                </div>
                                </div>
                                </TabPane>
                        </TabContent>
                      </Col>
                    </Row> 
                  </CardBody>
                </Card>   
              </Col> 
            </Row>
          </div>
              
        );
    }
}
export default Mailbox;
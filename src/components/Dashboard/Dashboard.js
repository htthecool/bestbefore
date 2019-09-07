import React, { Component } from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import color from 'rcolor';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { Card,CardBody,CardTitle,TabContent, TabPane, Nav, NavItem, NavLink, Row, Col ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Breadcrumb ,BreadcrumbItem } from 'reactstrap';
import './Dashboard.css';
import classnames from 'classnames';

const localizer = Calendar.momentLocalizer(moment);

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Orange'
    ],

    datasets: [{
        data: [400, 50, 100, 80, 150],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#00cc99',
            '#ffa31a'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#00cc99',
            '#ffa31a'
        ]
    }]
};
var rFactor = function () {
    return Math.round(Math.random() * 100);
};
var barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Apple',
        backgroundColor: '#36a2eb',
        borderColor: '#36a2eb',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    },
    {
        label: 'Google',
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }],
};
var lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Income',
        backgroundColor: 'rgb(56, 182, 202)',
        borderColor: 'rgb(56, 182, 202)',
        pointBorderColor: '#fff',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }, {
        label: 'Outcome',
        backgroundColor: 'rgb(249, 249, 249)',
        borderColor: 'rgb(249, 249, 249)',
        pointBorderColor: '#fff',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }]
};


const LinechartState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {

            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const BarchartState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'January',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.dropdownbarOpen = this.dropdownbarOpen.bind(this);
        this.dropdownlineOpen = this.dropdownlineOpen.bind(this);
        this.tabsclick = this.tabsclick.bind(this);
        this.onEventResize = this.onEventResize.bind(this);
        this.onEventDrop = this.onEventDrop.bind(this);
        this.state = {
            events: [
                {
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    title: "BirthDay Party "
                },
                {
                    start: new Date('2018-07-10'),
                    end: new Date('2018-07-10'),
                    title: "Marriage Anniversary"
                },
                {
                    start: new Date('2018-07-25'),
                    end: new Date('2018-07-25'),
                    title: "Conference"
                }
            ],
            dropdownbarOpen: false,
            dropdownlineOpen: false,
            activeTab: '1',
            widths:150
        };
        this.onEventResize = this.onEventResize.bind(this);
        this.onEventDrop = this.onEventDrop.bind(this);

    }
    dropdownbarOpen() {
        this.setState(prevState => ({
            dropdownbarOpen: !prevState.dropdownbarOpen

        }));
    }
    dropdownlineOpen() {
        this.setState(prevState => ({

            dropdownlineOpen: !prevState.dropdownlineOpen
        }));
    }
    tabsclick(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    onEventResize(type, { event, start, end, allDay }) {
        this.setState(state => {
            state.events[0].start = start;
            state.events[0].end = end;
            return { events: start };
        });
    };
    onEventDrop({ event, start, end, allDay }) {
        console.log(start);
    };
    componentWillMount() {
        this.setState(LinechartState);
        this.setState(BarchartState);
    }
    
    render() {
        const DnDCalendar = withDragAndDrop(Calendar);
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Dashboard</h4>
                            <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) }} />
                        </Col>
                        <Col sm={6}>
                        <Breadcrumb className="float-left float-sm-right">
                                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                    <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* <!-- widgets --> */}
                <Row>
                    <Col xl={3} lg={6} md={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-danger">
                                            <i className="fa fa-bar-chart-o highlight-icon" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Visitors</p>
                                        <h4>65,650</h4>
                                    </div>
                                </div>
                                <p className="text-muted pt-3 mb-0 mt-2 border-top">
                                    <i className="fa fa-exclamation-circle mr-1" aria-hidden="true"></i> 81% lower growth
                            </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-warning">
                                            <i className="fa fa-shopping-cart highlight-icon" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Orders</p>
                                        <h4>656</h4>
                                    </div>
                                </div>
                                <p className="text-muted pt-3 mb-0 mt-2 border-top">
                                    <i className="fa fa-bookmark-o mr-1" aria-hidden="true"></i> Total sales
                            </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-success">
                                            <i className="fa fa-dollar highlight-icon" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Revenue</p>
                                        <h4>$65656</h4>
                                    </div>
                                </div>
                                <p className="text-muted pt-3 mb-0 mt-2 border-top">
                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i> Sales Per Week
                            </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-primary">
                                            <i className="fa fa-twitter highlight-icon" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Followers</p>
                                        <h4>62,500+</h4>
                                    </div>
                                </div>
                                <p className="text-muted pt-3 mb-0 mt-2 border-top">
                                    <i className="fa fa-repeat mr-1" aria-hidden="true"></i> Just Updated
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={4} className="mb-30">
                        <Card className="card-statistics h-100">
                            {/* action group */}
                            <div className="btn-group info-drop">
                                <Dropdown isOpen={this.state.dropdownbarOpen} toggle={this.dropdownbarOpen}>
                                    <DropdownToggle className="dropdown-toggle-split text-muted" id="dropdown-no-caret">
                                        <i className="ti-more" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem><i className="text-primary ti-reload" />Refresh</DropdownItem>
                                        <DropdownItem><i className="text-secondary ti-eye" />View all</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <CardBody>
                                <div className="d-block">
                                        <CardTitle>Market summary</CardTitle>
                                    </div>
                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-4">
                                        <h6>Apple</h6>
                                        <b className="text-info">+ 82.24 % </b>
                                        </div>
                                        
                                        <div className="col-4">
                                        <h6>Google</h6>
                                        <b className="text-warning">+ 24.86 % </b>
                                        </div>
                                    </div>
                            
                            <div className="chart-wrapper" style={{height: 350}}>
                                <Bar data={barData} width={this.state.widths} options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}, scales: {yAxes: [{gridLines: {display: false}, ticks:{fontFamily: "Poppins"}}], xAxes: [{gridLines: {display: false},ticks:{fontFamily: "Poppins"}}]}}}  className="scrollbar-x text-center" />
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={8} className="mb-30">
                        <Card className="h-100">

                            <div className="btn-group info-drop">
                                <Dropdown isOpen={this.state.dropdownlineOpen} toggle={this.dropdownlineOpen}>
                                    <DropdownToggle className="dropdown-toggle-split text-muted" id="dropdown-no-caret">
                                        <i className="ti-more" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem><i className="text-primary ti-reload" />Refresh</DropdownItem>
                                        <DropdownItem><i className="text-secondary ti-eye" />View all</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                            </div>
                            <CardBody>
                                <div className="d-block d-md-flexx justify-content-between">
                                    <div className="d-block">
                                        <CardTitle>Site Visits Growth </CardTitle>
                                    </div>
                                    <div className="d-flex ">
                                        <div className="clearfix mr-30">
                                            <h6 className="text-success">Income</h6>
                                            <p>+584</p>
                                        </div>
                                        <div className="clearfix  mr-50">
                                            <h6 className="text-danger"> Outcome</h6>
                                            <p>-255</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chart-wrapper" style={{height: 350}}>
                                <Line data={lineData} className="scrollbar-x text-center" options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}, scales: {yAxes: [{gridLines: {display: false}, ticks:{fontFamily: "Poppins"}}], xAxes: [{gridLines: {display: false},ticks:{fontFamily: "Poppins"}}]}}} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} className="mb-30">

                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Customer Feedback</CardTitle>
                                <Row className="mb-30">
                                    <Col md={6}>
                                        <div className="clearfix">
                                            <p className="mb-10 float-left">Positive</p>
                                            <i className="mb-10 text-success float-right fa fa-arrow-up"> </i>
                                        </div>
                                        <div className="progress progress-small">
                                            <div className="skill2-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <h4 className="mt-10 text-success">8501</h4>
                                    </Col>
                                    <Col md={6}>
                                        <div className="clearfix">
                                            <p className="mb-10 float-left">Negative</p>
                                            <i className="mb-10 text-danger float-right fa fa-arrow-down"> </i>
                                        </div>
                                        <div className="progress progress-small">
                                            <div className="skill2-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <h4 className="mt-10 text-danger">3251</h4>
                                    </Col>
                                </Row>
                                <div className="chart-wrapper"  style={{height: 270}}>
                                    <Doughnut data={data} options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}}}  width={this.state.widths} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={8} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="tab nav-border" style={{ position: 'relative' }}>
                                    <div className="d-block d-md-flex justify-content-between">
                                        <div className="d-block w-100">
                                            <CardTitle>Best Sellers</CardTitle>
                                        </div>
                                        <div className="d-block d-md-flex" style={{ position: 'absolute', right: 0, top: 0 }}>
                                            <Nav tabs>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                                        onClick={() => { this.tabsclick('1'); }}
                                                    >
                                                        Months
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.activeTab === '2' })}
                                                        onClick={() => { this.tabsclick('2'); }}
                                                    >
                                                        Year
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </div>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1" title="Month">
                                            <Row className="mb-30">
                                                <Col md={2} sm={6}>
                                                    <img src="assets/images/blog/05.jpg" className="panelPhoto" />
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <h6 className="mb-0 sm-mt-5">Supercharge your motivation</h6>
                                                    <p className="sm-mb-5 d-block">I truly believe Augustine’s words are true. </p>
                                                    <span className="mb-0">by - <b className="text-info">PotenzaUser</b></span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-primary mb-0"><b>45,436</b></h5>
                                                    <span>Sales</span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-secondary mb-0"><b>$05,236</b></h5>
                                                    <span>Revenue</span>
                                                </Col>
                                            </Row>
                                            <Row className="mb-30">
                                                <Col md={2} sm={6}>

                                                    <img src="assets/images/blog/02.jpg" className="panelPhoto" />
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <h6 className="mb-0 sm-mt-5">Helen keller a teller seller</h6>
                                                    <p className="sm-mb-5 d-block">We also know those epic stories, those modern.</p>
                                                    <span className="mb-0">by - <b className="text-warning">WebminUser</b> </span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-success mb-0"><b>23,462</b></h5>
                                                    <span>Sales</span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-danger mb-0"><b>$166</b></h5>
                                                    <span>Revenue</span>
                                                </Col>
                                            </Row>
                                            <Row className="mb-30">
                                                <Col md={2} sm={6}>
                                                    <img src="assets/images/blog/03.jpg" className="panelPhoto" />
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <h6 className="mb-0 sm-mt-5">The other virtues practice</h6>
                                                    <p className="sm-mb-5 d-block">One of the most difficult aspects of achieving. </p>
                                                    <span className="mb-0">by - <b className="text-danger">TheCorps</b> </span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-warning mb-0"><b>5,566</b></h5>
                                                    <span>Sales</span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-info mb-0"><b>$4,126</b></h5>
                                                    <span>Revenue</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={2} sm={6}>
                                                    <img src="assets/images/blog/03.jpg" className="panelPhoto" />
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <h6 className="mb-0 sm-mt-5">You will begin to realise</h6>
                                                    <p className="sm-mb-5 d-block">Remind yourself you have nowhere to go . </p>
                                                    <span className="mb-0">by - <b className="text-danger"> PGSinfotech</b> </span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-warning mb-0"><b>5,566</b></h5>
                                                    <span>Sales</span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-info mb-0"><b>$4,126</b></h5>
                                                    <span>Revenue</span>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2" title="year">
                                            <Row className="mb-30">
                                                <Col md={2} sm={6}>
                                                    <img src="assets/images/blog/09.jpg" className="panelPhoto" />
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <h6 className="mb-0 sm-mt-5">Walk out 10 years into</h6>
                                                    <p className="sm-mb-5 d-block">Understanding the price and having the willingness. </p>
                                                    <span className="mb-0">by - <b className="text-danger">TheZayka</b> </span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-dark mb-0"><b>12,549</b></h5>
                                                    <span>Sales</span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="theme-color mb-0"><b>$1,656</b></h5>
                                                    <span>Revenue</span>
                                                </Col>
                                            </Row>
                                            <Row className="mb-30">
                                                <Col md={2} sm={6}>
                                                    <img src="assets/images/blog/06.jpg" className="panelPhoto" />
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <h6 className="mb-0 sm-mt-5">Step out on to the path</h6>
                                                    <p className="sm-mb-5 d-block">Success to you and then pull it out when you are.</p>
                                                    <span className="mb-0">by - <b className="text-info">CarDealer</b> </span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-primary mb-0"><b>1,366</b></h5>
                                                    <span>Sales</span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-secondary mb-0"><b>$4,536</b></h5>
                                                    <span>Revenue</span>
                                                </Col>
                                            </Row>
                                            <Row className="mb-30">
                                                <Col md={2} sm={6}>
                                                    <img src="assets/images/blog/07.jpg" className="panelPhoto" />
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <h6 className="mb-0 sm-mt-5">Briefly imagine that you</h6>
                                                    <p className="sm-mb-5 d-block">Motivators for your personality and your personal goals. </p>
                                                    <span className="mb-0">by - <b className="text-success">SamMartin</b> </span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-success mb-0"><b>465</b></h5>
                                                    <span>Sales</span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-danger mb-0"><b>$499</b></h5>
                                                    <span>Revenue</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={2} sm={6}>
                                                    <img src="assets/images/blog/08.jpg" className="panelPhoto" />
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <h6 className="mb-0 sm-mt-5">You continue doing what</h6>
                                                    <p className="sm-mb-5 d-block">The first thing to remember about success is that. </p>
                                                    <span className="mb-0">by - <b className="text-success">Cosntro</b> </span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-success mb-0"><b>4,456</b></h5>
                                                    <span>Sales</span>
                                                </Col>
                                                <Col md={2} sm={6} className="sm-mt-20">
                                                    <h5 className="text-danger mb-0"><b>$6,485</b></h5>
                                                    <span>Revenue</span>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <DnDCalendar
                                    defaultDate={new Date()}
                                    defaultView="month"
                                    events={this.state.events}
                                    onEventDrop={this.onEventDrop}
                                    onEventResize={this.onEventResize}
                                    resizable
                                    style={{ height: "100vh" }}
                                    localizer={localizer}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>



        );
    }
}
export default Dashboard;
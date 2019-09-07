import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Widgets.css';
import { get } from "axios";
import { feature } from "topojson-client";
import { Doughnut, Line, Bar, Radar, Pie, Polar } from 'react-chartjs-2';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Calendar from "react-big-calendar";
import moment from "moment";
const localizer = Calendar.momentLocalizer(moment);
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"
import { METHODS } from 'http';

//Doughnut Chart
const doughnutData = {
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


//Polar Chart
var polarData = {
    datasets: [{
        data: [
            11,
            5,
            10,
            13,
            8
        ],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#ffa31a',
            '#FFCE56',
            '#00cc99'
        ],
        label: 'My dataset'
    }],
    labels: [
        'Red',
        'Blue',
        'Orange',
        'Yellow',
        'Green'
    ]
};


// Rader Chart
var radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [{
        label: 'Apple',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
    }, {
        label: 'Google',
        backgroundColor: 'rgba(0,204,153,0.2)',
        borderColor: 'rgba(0,204,153,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
    }]
};
class Widgets extends React.Component {

    constructor() {
        super()
        this.state = {
            geographyPaths: [],
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
            widths: 150

        }
        this.loadPaths = this.loadPaths.bind(this);
        this.onEventDrop = this.onEventDrop.bind(this);
        this.onEventResize = this.onEventResize.bind(this);
    }
    componentDidMount() {
        this.loadPaths()
    }
    loadPaths() {
        get("assets/static/world-50m.json").then(res => {
            if (res.status !== 200) return
            const world = res.data
            // Transform your paths with topojson however you want...
            const countries = feature(world, world.objects[Object.keys(world.objects)[0]]).features
            this.setState({ geographyPaths: countries })
        })
    }

    //Calender
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
    render() {
        const DnDCalendar = withDragAndDrop(Calendar);
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Widgets</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active> Widgets</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* widgets */}
                <Row>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-danger">
                                            <i className="fa fa-bar-chart-o highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Visitors</p>
                                        <h4>65,650</h4>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 pt-3 border-top">
                                    <i className="fa fa-exclamation-circle mr-1" aria-hidden="true" /> 81% lower growth
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-warning">
                                            <i className="fa fa-shopping-cart highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Orders</p>
                                        <h4>656</h4>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 pt-3 border-top">
                                    <i className="fa fa-bookmark-o mr-1" aria-hidden="true" /> Total sales
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-success">
                                            <i className="fa fa-dollar highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Revenue</p>
                                        <h4>$65656</h4>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 pt-3 border-top">
                                    <i className="fa fa-calendar mr-1" aria-hidden="true" /> Sales Per Week
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card card-statistics h-100 admin-followers">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-primary">
                                            <i className="fa fa-twitter highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Followers</p>
                                        <h4>62,500+</h4>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 pt-3 border-top">
                                    <i className="fa fa-repeat mr-1" aria-hidden="true" /> Just Updated
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card card-statistics h-100 bg-danger">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-white">
                                            <i className="fa fa-bar-chart-o highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-white">Visitors</p>
                                        <h4 className="text-white">65,650</h4>
                                    </div>
                                </div>
                                <p className="mt-3 text-white pt-3 border-top border-white">
                                    <i className="fa fa-exclamation-circle mr-1" aria-hidden="true" /> 81% lower growth
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card card-statistics h-100 bg-primary">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-white">
                                            <i className="fa fa-shopping-cart highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-white">Orders</p>
                                        <h4 className="text-white">656</h4>
                                    </div>
                                </div>
                                <p className="text-white mt-3 pt-3 border-top border-white">
                                    <i className="fa fa-bookmark-o mr-1" aria-hidden="true" /> Total sales
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card card-statistics h-100 bg-warning">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-white">
                                            <i className="fa fa-dollar highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-white">Revenue</p>
                                        <h4 className="text-white">$65656</h4>
                                    </div>
                                </div>
                                <p className="text-white mt-3 pt-3 border-top border-white">
                                    <i className="fa fa-calendar mr-1" aria-hidden="true" /> Sales Per Week
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card card-statistics h-100 bg-dark">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-white">
                                            <i className="fa fa-twitter highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-white">Followers</p>
                                        <h4 className="text-white">62,500+</h4>
                                    </div>
                                </div>
                                <p className="text-white mt-3 pt-3 border-top border-white">
                                    <i className="fa fa-repeat mr-1" aria-hidden="true" /> Just Updated
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>

                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box bg-danger">
                                        <span className="text-white">
                                            <i className="fa fa-bar-chart-o highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Visitors</p>
                                        <h4>65,650</h4>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box bg-primary">
                                        <span className="text-white">
                                            <i className="fa fa-shopping-cart highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Orders</p>
                                        <h4>656</h4>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box bg-warning">
                                        <span className="text-white">
                                            <i className="fa fa-dollar highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Revenue</p>
                                        <h4>$65656</h4>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box bg-dark">
                                        <span className="text-white">
                                            <i className="fa fa-twitter highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Followers</p>
                                        <h4>62,500+</h4>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box bg-danger rounded-circle">
                                        <span className="text-white">
                                            <i className="fa fa-bar-chart-o highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Visitors</p>
                                        <h4>65,650</h4>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box bg-primary rounded-circle">
                                        <span className="text-white">
                                            <i className="fa fa-shopping-cart highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Orders</p>
                                        <h4>656</h4>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box bg-warning rounded-circle">
                                        <span className="text-white">
                                            <i className="fa fa-dollar highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Revenue</p>
                                        <h4>$65656</h4>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={6} lg={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box bg-dark rounded-circle">
                                        <span className="text-white">
                                            <i className="fa fa-twitter highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Followers</p>
                                        <h4>62,500+</h4>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className="mb-30">
                        <Card className="card-statistics fb-bg h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box-fixed">
                                        <span className="text-white">
                                            <i className="fa fa-facebook highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <h4 className="text-white">11,543</h4>
                                        <p className="card-text text-white">Likes </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="card-statistics youtube-bg h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box-fixed">
                                        <span className="text-white">
                                            <i className="fa fa-youtube highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <h4 className="text-white">1,20,543</h4>
                                        <p className="card-text text-white">Subscribers</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="card-statistics twitter-bg h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left icon-box-fixed">
                                        <span className="text-white">
                                            <i className="fa fa-twitter highlight-icon" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <h4 className="text-white">41,652</h4>
                                        <p className="card-text text-white">Followers </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>World Map</CardTitle>
                                <ComposableMap
                                    projectionConfig={{
                                        scale: 160,
                                        rotation: [0, 0, 0],
                                    }}

                                    style={{
                                        width: "100%",
                                        height: "500px",
                                    }}
                                >
                                    <ZoomableGroup>
                                        <Geographies geography={this.state.geographyPaths} disableOptimization>
                                            {(geographies, projection) =>
                                                geographies.map((geography, i) =>
                                                    <Geography
                                                        key={`${geography.properties.ADM0_A3}-${i}`}
                                                        cacheId={`path-${geography.properties.ADM0_A3}-${i}`}
                                                        round
                                                        geography={geography}
                                                        projection={projection}
                                                        style={{
                                                            default: {
                                                                fill: "rgb(215, 219, 222)",
                                                                stroke: "#fff",
                                                                strokeWidth: 0.75,
                                                                outline: "none",
                                                            },
                                                            hover: {
                                                                fill: "rgb(132, 186, 63)",
                                                                stroke: "#fff",
                                                                strokeWidth: 0.75,
                                                                outline: "none",
                                                            },
                                                            pressed: {
                                                                fill: "rgb(132, 186, 63)",
                                                                stroke: "#fff",
                                                                strokeWidth: 0.75,
                                                                outline: "none",
                                                            },
                                                        }}
                                                    />
                                                )}
                                        </Geographies>
                                    </ZoomableGroup>
                                </ComposableMap>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Radar Chart </CardTitle>
                                <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                    <Radar data={radarData} width={this.state.widths}  options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}}} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Polar Chart </CardTitle>
                                <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                    <Polar data={polarData} width={this.state.widths}  options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}}} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Doughnut Chart </CardTitle>
                                <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                    <Doughnut data={doughnutData} width={this.state.widths}  options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}}} />
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
            </div >
        );
    }
}
export default Widgets;
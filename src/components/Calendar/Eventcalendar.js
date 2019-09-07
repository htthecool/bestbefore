import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Calendar from "react-big-calendar";
import dragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";

const localizer = Calendar.momentLocalizer(moment);

class Eventcalendar extends React.Component {
    constructor() {
        super();
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
            ]
        };
        this.onEventResize = this.onEventResize.bind(this);
        this.onEventDrop = this.onEventDrop.bind(this);
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
    render() {
        const DnDCalendar = dragAndDrop(Calendar);
        return (
            <div>
            <div className="page-title">
                <Row>
                    <Col md={6}>
                        <h4 className="mb-0"> Calendar</h4>
                    </Col>
                    <Col md={6} >
                        <Breadcrumb className="float-left float-sm-right">
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>Calendar List</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>
            <Card className="card-statistics h-100 mb-30">
                <CardBody>
                    <div className="App">
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
                    </div>
                </CardBody>
            </Card>
        </div>
        );

    }
}
export default Eventcalendar;
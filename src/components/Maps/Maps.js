import React, { Component } from 'react';
import { get } from "axios";
import { feature } from "topojson-client";
import {Row,Col,BreadcrumbItem,Breadcrumb,Card,CardBody,CardTitle } from 'reactstrap';
import moment from "moment";
import './Maps.css';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
    fontFamily: "Roboto, sans-serif",
}

class Maps extends React.Component {
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
            ]
        }
        this.loadPaths = this.loadPaths.bind(this)
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
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Map</h4>
                        </Col>
                        <Col sm={6}>
                                <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Maps</BreadcrumbItem>
                                </Breadcrumb>  
                        </Col>
                    </Row>
                </div>
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
            </div>
        )
    }
}
export default Maps;
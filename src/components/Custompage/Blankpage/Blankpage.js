import React from 'react';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Blankpage.css';
class Blankpage extends React.Component {
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Page Title</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Page Title</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={12} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <p>Page content goes here<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Blankpage;
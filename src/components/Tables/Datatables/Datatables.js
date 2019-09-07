import React, { Component } from 'react';
import './Datatables.css';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [
    {
        "name": "Ethel Price",
        "gender": "female",
        "company": "Johnson, Johnson and Partners, LLC CMP DDC",
        "age": 22
    },
    {
        "name": "Claudine Neal",
        "gender": "female",
        "company": "Sealoud",
        "age": 55
    },
    {
        "name": "Beryl Rice",
        "gender": "female",
        "company": "Velity",
        "age": 67
    },
    {
        "name": "Wilder Gonzales",
        "gender": "male",
        "company": "Geekko"
    },
    {
        "name": "Georgina Schultz",
        "gender": "female",
        "company": "Suretech"
    },
    {
        "name": "Carroll Buchanan",
        "gender": "male",
        "company": "Ecosys"
    },
    {
        "name": "Valarie Atkinson",
        "gender": "female",
        "company": "Hopeli"
    },
    {
        "name": "Schroeder Mathews",
        "gender": "male",
        "company": "Polarium"
    },
    {
        "name": "Lynda Mendoza",
        "gender": "female",
        "company": "Dogspa"
    },
    {
        "name": "Sarah Massey",
        "gender": "female",
        "company": "Bisba"
    },
    {
        "name": "Robles Boyle",
        "gender": "male",
        "company": "Comtract"
    },
    {
        "name": "Evans Hickman",
        "gender": "male",
        "company": "Parleynet"
    },
    {
        "name": "Dawson Barber",
        "gender": "male",
        "company": "Dymi"
    },
    {
        "name": "Bruce Strong",
        "gender": "male",
        "company": "Xyqag"
    },
    {
        "name": "Nellie Whitfield",
        "gender": "female",
        "company": "Exospace"
    },
    {
        "name": "Jackson Macias",
        "gender": "male",
        "company": "Aquamate"
    },
    {
        "name": "Pena Pena",
        "gender": "male",
        "company": "Quarx"
    },
    {
        "name": "Lelia Gates",
        "gender": "female",
        "company": "Proxsoft"
    },
    {
        "name": "Letitia Vasquez",
        "gender": "female",
        "company": "Slumberia"
    },
    {
        "name": "Trevino Moreno",
        "gender": "male",
        "company": "Conjurica"
    },
    {
        "name": "Barr Page",
        "gender": "male",
        "company": "Apex"
    },
    {
        "name": "Kirkland Merrill",
        "gender": "male",
        "company": "Utara"
    },
    {
        "name": "Blanche Conley",
        "gender": "female",
        "company": "Imkan"
    }
]




class Datatables extends React.Component {

    constructor(props) {
        super(props);
        this.selectedRowClass = this.selectedRowClass.bind(this);
    }

    selectedRowClass(row, isSelect) {
        if (isSelect) {
            if (row.id >= 3) {
                return 'bigger-than-three-select-row';
            } else {
                return 'less-than-three-select-row';
            }
        } else {
            return '';
        }
    }
    render() {

        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            className: this.selectedRowClass
        };

        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0">Data HTML Table </h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Data HTML Table</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    <Col xl={12} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <BootstrapTable
                                    data={products}
                                    selectRow={selectRowProp}
                                    striped
                                    hover
                                    condensed
                                    pagination
                                    search>
                                    <TableHeaderColumn width='100' dataField='name' isKey>NAME</TableHeaderColumn>
                                    <TableHeaderColumn width='100' dataField='gender'>TYPE</TableHeaderColumn>
                                    <TableHeaderColumn width='100' dataField='company'>PHONE</TableHeaderColumn>
                                </BootstrapTable>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Datatables;


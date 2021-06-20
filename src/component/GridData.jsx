import React from 'react'
import { Card, Col } from 'react-bootstrap'

const GridData = (props,index) => {
    return (
        <Col key={index}>
            <Card style={{ width: '18rem' }}>
                <center>
                    <Card.Body>
                        <Card.Title >bookingId: {props.bookingId}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Cliente: {props.tutenUserClient.firstName} {props.tutenUserClient.lastName}</Card.Subtitle>
                        <Card.Text>Fecha de Creación: {new Date(props.bookingTime).toLocaleString()}</Card.Text>
                        <Card.Text>Dirección: {props.locationId.streetAddress}</Card.Text>
                        <Card.Text>Precio: {props.bookingPrice}</Card.Text>
                    </Card.Body>
                </center>
            </Card>
        </Col>
    )
}

export default GridData

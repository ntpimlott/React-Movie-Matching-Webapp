import React from 'react'
import { Container, Card } from 'react-bootstrap';

const CardLayout = ({ title, body, footer, imgurl, bodyClass }) => {

    return (
        <div>
            <Container style={{ paddingTop: 10 }}>
                <Card style={{ paddingTop: 10 }}>
                    {!title ? <React.Fragment /> : <Card.Title className="text-center">{title}</Card.Title>}
                    {!imgurl ? <React.Fragment /> : <Card.Img variant="top" src={imgurl} />}
                    {!body ? <React.Fragment /> : <Card.Body className={bodyClass}>{body}</Card.Body>}
                    {!footer ? <React.Fragment /> : <Card.Footer className="text-center">{footer}</Card.Footer>}
                </Card>
            </Container>
        </div>
    )
}

export default CardLayout

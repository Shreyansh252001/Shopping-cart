import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';


const CardBootstrap = (props) => {
    const sr = 'https://images.unsplash.com/photo-1603473108936-62db49022bfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    return (
        <div>
            <Row>
                <Col lg='3'>
                    <Card >
                        <CardImg top width="100%" src={sr} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3'>
                    <Card >
                        <CardImg top width="100%" src={sr} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col> <Col lg='3'>
                    <Card >
                        <CardImg top width="100%" src={sr} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default CardBootstrap;

import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { IExport } from './interfaces';
import styles from './Card.module.scss';

export default function Comp({ }: IExport.Props) {

    return (
        <>
            <div className={styles.compContainer} style={{ width: '100%' }}>
                <Row className={'d-flex justify-content-center'}>
                    <Col sm={'3'}>
                        <Card>
                            <Card.Header className={'d-flex justify-content-end p-0'}>
                                <div className={`d-flex position-relative`}>
                                    <div className={`${styles.cardBadgeSlant} bg-primary bg-gradient`}></div>
                                    <div className={`position-relative p-2 text-uppercase text-white bg-gradient bg-primary`}>
                                        <strong>Recommended</strong>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className={"text-primary fs-2"}>
                                    RoundTrip Choice
                                </Card.Title>
                                <div className={"d-flex align-items-center pt-3"}>
                                    <Card.Subtitle className="pe-3 mb-2 text-muted">
                                        Starting at:
                                    </Card.Subtitle>
                                    <p className={"fs-1 fw-bold"}>$216.00</p>
                                </div>
                                <Card.Text>
                                    <p><small className={"text-primary"}><strong>Includes:</strong></small></p>
                                    <div className={'d-flex'}>
                                        <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                        <p><strong>150%</strong> trip interruption coverage</p>
                                    </div>
                                    <div className={'d-flex'}>
                                        <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                        <p>Medical expense coverage, including Covid treatment, up to <strong>$500,000</strong></p>
                                    </div>
                                    <div className={'d-flex'}>
                                        <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                        <p>Trip delay coverage up to <strong>$2,000</strong></p>
                                    </div>
                                    <div className={'d-flex'}>
                                        <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                        <p>Protection for lost belongings, including baggage, VISA, credit card, and more.</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className={'d-flex justify-content-center pb-4'}>
                                <Button variant='secondary' className={'w-75'}>Select</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col sm={'3'}>
                        <Card className={"shadow"}>
                            <Card.Body>
                                <Col className={"py-3"}>
                                    <Row className={"d-flex justify-content-between"}>
                                        <Col sm="8">
                                            <div>
                                                <p className={"text-primary fw-bold mb-0"}>Rental car care</p>
                                                <p>Coverage up to $35,000 for rental car damage and theft.</p>
                                                <Button variant='link'><i className="fa-regular fa-circle-question pe-2 fs-6"></i>Tell me more</Button>
                                            </div>
                                        </Col>
                                        <Col className={"d-flex flex-column align-items-end"}>
                                            <p className={"h3 mb-0"}><strong>$7.00</strong></p>
                                            <p><small>per day</small></p>
                                            <Button variant='outline-primary'>Add</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card.Body>
                        </Card>
                        <Card className={"shadow mt-3"}>
                            <Card.Body>
                                <Col className={"py-3"}>
                                    <Row className={"d-flex justify-content-between"}>
                                        <Col sm="8">
                                            <div>
                                                <p className={"text-primary fw-bold mb-0"}>Event ticket free protection</p>
                                                <p>Cover tickets to your event in case you can't attend.</p>
                                                <Button variant='link'><i className="fa-regular fa-circle-question pe-2 fs-6"></i>Tell me more</Button>
                                            </div>
                                        </Col>
                                        <Col className={"d-flex flex-column align-items-end"}>
                                            <p className={"h3 mb-0"}><strong>$7.00</strong></p>
                                            <p><small>per day</small></p>
                                            <Button variant='primary'>Remove</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

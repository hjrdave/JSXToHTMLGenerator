import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Link from '../../../../../components/atoms/Link';
import { IExport } from '../../interfaces';
import styles from '../../Header.module.scss';

interface Props {
    items: IExport.MegaMenu;
};

export default function MegaMenu({ items }: Props) {

    const { tripInsItems, travelMedInsItems } = items;

    return (
        <>
            <div className={`${styles.megaMenu}`}>
                <Col>
                    <Row className={'m-0'}>
                        <Col className={'bg-white rounded'}>
                            <Row>
                                <Col sm={12} lg={6} className={`${styles.divider} my-0 my-lg-4 px-4 pt-4 pt-lg-0`}>
                                    <h1 className={'text-primary fs-3'}>Insurance</h1>
                                    <p className={'text-dark'}>
                                        Let us guide you to the perfect plan for your trip and
                                         gain peace of mind that you have the coverage you need.
                                    </p>
                                    <Button variant={'secondary'} size={'sm'} as={'a'} className={'w-100 text-white'}>Find Your Plan</Button>
                                </Col>
                                <Col sm={12} lg={6} className={'d-flex px-4 py-4'}>
                                    <div className={'ps-0 ps-lg-2'}>
                                        <p className={'text-primary fw-bolder'}>Who's traveling?</p>
                                        <p className={'text-dark'}><small>We'll help you learn more about all the plans available to you. Click below to get started.</small></p>
                                        <p className={'fw-bold fs-6'}>
                                            <a href={'/'} className={"text-decoration-none text-primary"}>Us Resident &gt;&gt;</a>
                                        </p>
                                        <p className={'text-primary fw-bold fs-6'}>
                                            <a href={'/'} className={"text-decoration-none text-primary"}>Non-Us Resident &gt;&gt;</a>
                                        </p>
                                        <p className={'text-primary fw-bold fs-6'}>
                                            <a href={'/'} className={"text-decoration-none text-primary"}>3 Visa Holder &gt;&gt;</a>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'bg-light bg-opacity-50 p-4 rounded-start'}>
                                    <Row>
                                        <Col>
                                        <p className={'text-primary fw-bold'}>Want to talk to a lisensed agent?</p>
                                        <div className={'d-flex'}>
                                            <p className={'text-dark pe-4'}>
                                                <i className="fa-solid fa-phone text-primary pe-2"></i>
                                                Call us
                                            </p>
                                            <p className={'text-dark pe-4'}>
                                                <i className="fa-solid fa-comment-dots text-primary pe-2"></i>
                                                Chat with us
                                            </p>
                                            <p className={'text-dark'}>
                                                <i className="fa-solid fa-envelope text-primary pe-2"></i>
                                                Email us
                                            </p>
                                        </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} lg={5} className={'bg-light p-4 rounded'}>
                            <Row>
                                <Col>
                                <p className={'text-primary fw-bolder'}>Know what plan you need?</p>
                                <p className={'text-dark'}><small>We'll help you learn more about all the plans available to you. Click below to get started.</small></p>
                                <p className={'fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none text-primary"}>Us Resident &gt;&gt;</a>
                                </p>
                                <p className={'fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none text-primary"}>USA Trip Protection  &gt;&gt;</a>
                                </p>
                                <p className={'fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none text-primary"}>Travel Medical &gt;&gt;</a>
                                </p>
                                <p className={'fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none text-primary"}>Travel Medical Annual Multi-Trip &gt;&gt;</a>
                                </p>
                                <p className={'fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none text-primary"}>Travel Medical USA Visitor &gt;&gt;</a>
                                </p>
                                <p className={'fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none text-primary"}>Medical Evacuation & Repatriation &gt;&gt;</a>
                                </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </div>
        </>
    )
}
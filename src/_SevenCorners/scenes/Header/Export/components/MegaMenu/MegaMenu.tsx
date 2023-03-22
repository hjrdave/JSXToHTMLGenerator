import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Link from '../../../../../components/atoms/Link';
import { IExport } from '../../interfaces';
import styles from "./MegaMenu.module.scss";

interface Props {
    items: IExport.MegaMenu;
};

export default function MegaMenu({ items }: Props) {

    const { tripInsItems, travelMedInsItems } = items;

    return (
        <>
            <div className={`${styles.compContainer}`}>
                <Col>
                    <Row className={'m-0'}>
                        <Col>
                            <Row>
                                <Col className={'pt-4 ps-4 pe-0'}>
                                    <h1 className={'text-primary fs-3'}>Insurance</h1>
                                    <p className={'text-dark'}>
                                        Let us guide you to the perfect plan for your trip and
                                         gain peace of mind that you have the coverage you need.
                                    </p>
                                    <Button variant={'secondary'} size={'sm'} as={'a'} className={'w-100'}>Find Your Plan</Button>
                                </Col>
                                <Col className={'d-flex py-4 px-4'}>
                                    <div className="vr text-muted"></div>
                                    <div className={'ps-4'}>
                                        <p className={'text-primary fw-bolder'}>Who's traveling?</p>
                                        <p className={'text-dark'}><small>We'll help you learn more about all the plans available to you. Click below to get started.</small></p>
                                        <p className={'text-primary fw-bold fs-6'}>
                                            <a href={'/'} className={"text-decoration-none"}>Us Resident &gt;&gt;</a>
                                        </p>
                                        <p className={'text-primary fw-bold fs-6'}>
                                            <a href={'/'} className={"text-decoration-none"}>Non-Us Resident &gt;&gt;</a>
                                        </p>
                                        <p className={'text-primary fw-bold fs-6'}>
                                            <a href={'/'} className={"text-decoration-none"}>3 Visa Holder &gt;&gt;</a>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'bg-light p-4'}>
                                    <Row>
                                        <Col>
                                        <p className={'text-primary fw-bold'}>Want to talk to a lisensed agent?</p>
                                        <div className={'d-flex'}>
                                            <p className={'text-primary pe-4'}>
                                                <i className="fa-solid fa-phone pe-2"></i>
                                                Call us
                                            </p>
                                            <p className={'text-primary pe-4'}>
                                                <i className="fa-solid fa-comment-dots pe-2"></i>
                                                Chat with us
                                            </p>
                                            <p className={'text-primary'}>
                                                <i className="fa-solid fa-envelope pe-2"></i>
                                                Email us
                                            </p>
                                        </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={'5'} className={'bg-light p-4'}>
                            <Row>
                                <Col>
                                <p className={'text-primary fw-bolder'}>Know what plan you need?</p>
                                <p className={'text-dark'}><small>We'll help you learn more about all the plans available to you. Click below to get started.</small></p>
                                <p className={'text-primary fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none"}>Us Resident &gt;&gt;</a>
                                </p>
                                <p className={'text-primary fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none"}>USA Trip Protection  &gt;&gt;</a>
                                </p>
                                <p className={'text-primary fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none"}>Travel Medical &gt;&gt;</a>
                                </p>
                                <p className={'text-primary fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none"}>Travel Medical Annual Multi-Trip &gt;&gt;</a>
                                </p>
                                <p className={'text-primary fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none"}>Travel Medical USA Visitor &gt;&gt;</a>
                                </p>
                                <p className={'text-primary fw-bold'}>
                                    <a href={'/'} className={"text-decoration-none"}>Medical Evacuation & Repatriation &gt;&gt;</a>
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
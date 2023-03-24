import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { IExport } from './interfaces';
import styles from './HeroBanner.module.scss';

export default function Comp({ }: IExport.Props) {

    return (
        <>
            <div className={`${styles.heroSize} sc-bg-stripes`}>
                <Container>
                    <Row>
                        <Col sm={12} className={`d-flex align-items-center p-5 px-md-0`}>
                            <div>
                                <h1 className={"text-center text-md-start"}>This is a Hero Banner</h1>
                                <p className={'text-center text-md-start fs-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  
        </>
    )
}
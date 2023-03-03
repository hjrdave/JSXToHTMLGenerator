import React from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import Copy from '../../../App/components/atoms/Copy';
import { ISiteMapItems } from './interfaces';

export default function CustomCard({ tags, page, url }: ISiteMapItems) {


    return (
        <>
            <Col>
                <Row>
                    <Col>
                        {
                            tags.map((tag, index) => (
                                <Badge key={index} bg="secondary" className={'me-1'}>{tag}</Badge>
                            ))
                        }
                    </Col>
                    <Col className={'d-flex justify-content-end'}>
                        <Copy value={url} />
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-3'}>
                        <h4>{page}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-2'}>
                        <p>
                            <a href={url} target={'_blank'} style={{ color: 'black' }}>{url}</a>
                        </p>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
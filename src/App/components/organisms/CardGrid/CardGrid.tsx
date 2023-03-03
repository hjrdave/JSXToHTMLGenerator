import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';

interface Props {
    data: { [key: string]: any }[];
    as: (props: any) => JSX.Element;
    rowCount?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
};

export default function CardGrid({ data, as: Comp, rowCount, className }: Props) {

    return (
        <>
            <div className={`w-100 ${className}`}>
                <Col>
                    <Row xs={1} md={(rowCount) ? rowCount : 3} className={'g-4'}>
                        {
                            data?.map((item) => (
                                <React.Fragment key={item.id}>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Comp {...item} />
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </React.Fragment>
                            ))
                        }
                    </Row>
                </Col>
            </div>
        </>
    )
}
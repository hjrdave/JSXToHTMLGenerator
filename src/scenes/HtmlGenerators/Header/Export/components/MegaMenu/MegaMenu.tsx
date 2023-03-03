import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from '../../../../../../_SevenCorners/components/html/atoms/Link';
import { IExport } from '../../interfaces';
// import styles from '../../Header.module.scss';

interface Props {
    items: IExport.MegaMenu;
};

export default function MegaMenu({ items }: Props) {

    const { tripInsItems, travelMedInsItems } = items;

    return (
        <>
            <div className={''/*styles.megaMenu*/}>
                <Col>
                    <Row>
                        <Col lg={'4'}>
                            <div className={'p-3'}>
                                <h6 className={'text-uppercase mb-3'}>Trip Insurance</h6>
                                <p>Coverage for nonrefundable trip expenses due to cancellation, delay, and interruption; baggage delay/loss; medical expenses and medical evacuation.</p>
                                {
                                    tripInsItems.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <p className={'mb-1'}>
                                                <strong>
                                                    <Link path={item.path}>
                                                        <>{item.text} <i className="fa-regular fa-circle-right ps-2"></i></>
                                                    </Link>
                                                </strong>
                                            </p>
                                            <p>{item.desc}</p>
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                        </Col>
                        <Col>
                            <div className={`${/*styles.megaMenuColumnTwo*/''} p-3`}>
                                <h6 className={'text-uppercase mb-3'}>Travel Medical Insurance</h6>
                                <Col>
                                    <Row>
                                        <Col sm={12} lg={6}>
                                            {
                                                travelMedInsItems.filter((item, index) => index < (travelMedInsItems.length / 2)).map((item, index) => (
                                                    <React.Fragment key={index}>
                                                        <p className={'mb-1'}>
                                                            <strong>
                                                                <Link path={item.path}>
                                                                    <>{item.text} <i className="fa-regular fa-circle-right ps-2"></i></>
                                                                </Link>
                                                            </strong>
                                                        </p>
                                                        <p>{item.desc}</p>
                                                    </React.Fragment>
                                                ))
                                            }
                                        </Col>
                                        <Col sm={12} lg={6}>
                                            {
                                                travelMedInsItems.filter((item, index) => index >= (travelMedInsItems.length / 2)).map((item, index) => (
                                                    <React.Fragment key={index}>
                                                        <p className={'mb-1'}>
                                                            <strong>
                                                                <Link path={item.path}>
                                                                    <>{item.text} <i className="fa-regular fa-circle-right ps-2"></i></>
                                                                </Link>
                                                            </strong>
                                                        </p>
                                                        <p>{item.desc}</p>
                                                    </React.Fragment>
                                                ))
                                            }
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </div>
        </>
    )
}
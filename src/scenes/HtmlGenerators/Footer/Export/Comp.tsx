import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IExport } from './interfaces';
import Image from '../../../../_SevenCorners/components/html/atoms/Image';
import Link from '../../../../_SevenCorners/components/html/atoms/Link';
import styles from './Footer.module.scss';

export default function Comp({ address, connect, markets, products, resources, legal }: IExport.Props) {
    const date = new Date();
    return (
        <>
            <div className={`${styles.compContainer} text-white`}>
                <Container>
                    <Row className={'px-3'}>
                        <Col md={6} lg={2} className={'px-3 pt-4'}>
                            <div className={'d-flex flex-column align-items-center align-items-lg-start'}>
                                <Image path={'/'} className={'p-sm-4 p-md-0'} alt={'Seven Corners'} />
                                <p className={`${styles.address} pt-2 mb-0 text-sm-center text-md-start`}>{address?.street}</p>
                                <p className={`${styles.address} mb-0 text-sm-center text-md-start`}>{address?.city}, {address?.state} {address?.zip}</p>
                            </div>
                        </Col>
                        <Col className={'d-flex justify-content-start justify-content-md-center pt-4'}>
                            <div>
                                <h6 className="text-uppercase fw-bold">Connect</h6>
                                <div className={"pt-2"} style={{ width: '125px' }}>
                                    <div className='d-flex justify-content-between'>
                                        <Link path={connect?.twitter} target={'_blank'}>
                                            <i className={`${styles.icon} fa-brands fa-twitter fs-4`}></i>
                                        </Link>
                                        <Link path={connect?.facebook} target={'_blank'}>
                                            <i className={`${styles.icon} fa-brands fa-facebook fs-4`}></i>
                                        </Link>
                                        <Link path={connect?.linkedin} target={'_blank'}>
                                            <i className={`${styles.icon} fa-brands fa-linkedin fs-4`}></i>
                                        </Link>
                                    </div>
                                    <div className='d-flex justify-content-between pt-3'>
                                        <Link path={connect?.pinterest} target={'_blank'}>
                                            <i className={`${styles.icon} fa-brands fa-pinterest fs-4`}></i>
                                        </Link>
                                        <Link path={connect?.youtube} target={'_blank'}>
                                            <i className={`${styles.icon} fa-brands fa-youtube fs-4`}></i>
                                        </Link>
                                        <Link path={connect?.instagram} target={'_blank'}>
                                            <i className={`${styles.icon} fa-brands fa-instagram fs-4`}></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={'d-flex justify-content-start justify-content-md-center pt-4'}>
                            <div>
                                <h6 className="text-uppercase fw-bold">Our Markets</h6>
                                <ul className={`${styles.listGroup} ps-0`}>
                                    {
                                        markets?.map((item, index) => (
                                            <React.Fragment key={index} >
                                                <Link path={item.path} target={'_blank'}>
                                                    <li>{item.text}</li>
                                                </Link>
                                            </React.Fragment>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className={'d-flex justify-content-start justify-content-md-center pt-4'}>
                            <div>
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <ul className={`${styles.listGroup} ps-0`}>
                                    {
                                        products?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <Link path={item.path} target={'_blank'}>
                                                    <li>{item.text}</li>
                                                </Link>
                                            </React.Fragment>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} md={3} className={'d-flex justify-content-start justify-content-md-center pt-4'}>
                            <div>
                                <h6 className="text-uppercase fw-bold">Resources</h6>
                                <ul className={`${styles.listGroup} ps-0`}>
                                    {
                                        resources?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <Link path={item.path} target={'_blank'}>
                                                    <li>{item.text}</li>
                                                </Link>
                                            </React.Fragment>
                                        ))
                                    }
                                    <div className={`btn-group dropend`}>
                                        <button type="button" className="btn btn-link dropdown-toggle p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                            Media Contact
                                        </button>
                                        <div className="dropdown-menu p-3">
                                            <p className={'mb-0'}><strong>Lauren Fielder</strong></p>
                                            <p className={'mb-0'}><small>317-607-1168</small></p>
                                            <p className={'mb-0'}><small><a href="mailto:email@example.com">lfiedler@bohlsengroup.com</a></small></p>
                                            <p className={'mb-0'}>
                                                <small>
                                                    <a href={'https://www.bohlsengroup.com/'} target={'_blank'}>bohlsengroup.com</a>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col className={`${styles.copyright} py-2`}>
                            <p className={'mb-0 text-center'}>
                                <small>Copyright &copy; {date.getFullYear()} Seven Corners Inc. All rights reserved.</small>
                            </p>
                            <p className={'mb-0 pt-1 text-center'}>
                                <small>
                                    {
                                        legal?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <Link path={item.path} target={'_blank'}>{item?.text}</Link>
                                                {
                                                    (legal.length !== (index + 1)) ? <>&nbsp; | &nbsp;</> : ''
                                                }
                                            </React.Fragment>
                                        ))
                                    }
                                </small>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
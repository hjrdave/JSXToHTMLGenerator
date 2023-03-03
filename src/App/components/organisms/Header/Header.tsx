import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import NavItem from '../../molecules/NavItem';
import styles from './Header.module.scss';

export default function Header() {

    return (
        <>
            <Sticky enabled={true} innerZ={3}>
                <Navbar variant="dark" className={`${styles.compContainer}`}>
                    <Container fluid>
                        <Row>
                            <Col className={'d-flex justify-content-end align-items-center'}>
                                <Navbar.Brand>
                                    <i className="fa-solid fa-code pe-2"></i>
                                    Builder
                                </Navbar.Brand>
                                {/* <a href={'http://localhost:3000/previews/footer-widget.html'}>Preview Mode</a> */}
                                <div className={'d-flex ps-3'}>
                                    <NavItem
                                        text={'Home'}
                                        path={'/'}
                                        className={'text-white pe-4'}
                                        icon={<i className="fa-solid fa-house pe-2"></i>}
                                    />
                                    <NavItem
                                        text={'HTML Generator'}
                                        className={'pe-4 text-white'}
                                        icon={<i className="fa-brands fa-html5 pe-2"></i>}
                                        subItems={[
                                            { text: 'Example', path: '/example' },
                                            { text: 'Header', path: '/header' },
                                            { text: 'Footer', path: '/footer' },
                                            { text: 'CorpLeadershipPage', path: '/corp-leadership-page' }
                                        ]}
                                    />
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Navbar>
            </Sticky>
        </>
    )
}
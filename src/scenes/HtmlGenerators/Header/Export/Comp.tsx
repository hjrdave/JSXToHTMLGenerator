import React from 'react';
import { Col, Container, Navbar, Nav } from 'react-bootstrap';
import { IExport } from './interfaces';
import NavItems from './components/NavItems';
import Search from './components/Search';
import UtilNavItems from './components/UtilNavItems';
import Image from '../../../../App/components/atoms/Image';
import { initScripts } from './scripts';
// import styles from './Header.module.scss';

export default function Comp({ navItems, logoPath, logoAlt, megaMenu }: IExport.Props) {

    const toggleID = "basic-navbar-nav";
    React.useEffect(() => {
        initScripts();
    }, []);

    return (
        <>
            <Navbar variant={'dark'} expand="lg" className={`${'styles.compContainer'} py-sm-0 py-md-3`}>
                <Container>
                    <Navbar.Brand href={logoPath}>
                        <Image path={logoPath} className={`${'styles.logo'} p-sm-4 p-md-0`} alt={logoAlt} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={toggleID} />
                    <Navbar.Collapse id={toggleID}>
                        <Nav className={'p-2 p-lg-0 w-100'}>
                            <Col className={'d-lg-flex'}>
                                <NavItems
                                    megaMenu={megaMenu}
                                    items={navItems}
                                />
                            </Col>
                            <Col className={'d-lg-flex justify-content-end align-items-center'}>
                                <UtilNavItems />
                                <Search />
                            </Col>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
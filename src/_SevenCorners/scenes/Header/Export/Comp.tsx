import React from 'react';
import { Col, Container, Navbar, Nav } from 'react-bootstrap';
import { IExport } from './interfaces';
import NavItems from './components/NavItems';
import Search from './components/Search';
import UtilNavItems from './components/UtilNavItems';
import Image from '../../../components/atoms/Image';
import SearchModal from './components/SearchModal';
import SCLogo from '../../../images/logo-sc-vert-white.webp';
import { initScripts } from './scripts';
import styles from "./Header.module.scss";

export default function Comp({ navItems, logoPath, logoAlt, megaMenu }: IExport.Props) {

    const toggleID = "basic-navbar-nav";
    React.useEffect(() => {
        initScripts();
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark p-3 ${styles.compContainer}`}>
                <SearchModal>
                    <Search />
                </SearchModal>
                <div className="container-fluid">
                    <a className="navbar-brand" href={SCLogo}>
                        <Image path={SCLogo} className={`${styles.logo}`} alt={logoAlt} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target={`#${toggleID}`} aria-controls={toggleID} aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id={toggleID}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <Col className={'d-lg-flex'}>
                                <NavItems
                                    megaMenu={megaMenu}
                                    items={navItems}
                                />
                            </Col>
                            <Col className={'d-lg-flex justify-content-end align-items-center'}>
                                <UtilNavItems />
                            </Col>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
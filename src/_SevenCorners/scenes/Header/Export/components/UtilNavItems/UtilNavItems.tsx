import React from 'react';
import { Nav } from 'react-bootstrap';
// import styles from '../../Header.module.scss';

interface Props {

}

export default function UtilNavItems({ }: Props) {

    const utilNavContainer = 'header-util-navitem-container';
    const searchBtn = 'header-util-search-btn';

    return (
        <>
            <div id={utilNavContainer} className={'d-flex flex-column flex-lg-row justify-sm-content-end justify-md-content-center align-content-center'}>
                {/* <p className={'mb-0 ps-0 pt-1 pe-2'}>
                    <small className={`${styles.helpNumber} text-white`}>
                        Need help? 800-335-0611&nbsp;&nbsp;&nbsp;|
                    </small>
                </p> */}
                <div className="nav-item dropdown ps-0 pe-2">
                    <button className={`${'styles.navLink'} btn dropdown-toggle text-white px-0 pt-2 ps-0 ps-lg-3`} data-bs-toggle="dropdown" aria-expanded="false">
                        <i className={`${'styles.utilIcon'} fa-solid fa-circle-info pe-2`}></i>
                        Help
                    </button>
                    <div className={`${'styles.dropdownMenu'} ${'styles.navLink'} dropdown-menu pe-2`}>
                        <a className="dropdown-item" href={'tel:+8003350611'}>800-335-0611</a>
                    </div>
                </div>
                <Nav.Link href={'https://www.sevencorners.com/about/contact'} className={`${'styles.navLink'} px-0 pt-2 pt-lg-2 ps-0 ps-lg-2 text-white`}>
                    <i className={`${'styles.utilIcon'} fa-solid fa-phone pe-2`}></i>
                    Contact
                </Nav.Link>
                <div className="nav-item dropdown">
                    <button className={`${'styles.navLink'} btn dropdown-toggle text-white px-0 pt-2 ps-0 ps-lg-3`} data-bs-toggle="dropdown" aria-expanded="false">
                        <i className={`${'styles.utilIcon'} fa-solid fa-right-to-bracket pe-2`}></i>
                        Login
                    </button>
                    <ul className={`${'styles.dropdownMenu'} ${'styles.navLink'} dropdown-menu pe-2`}>
                        <li><a className="dropdown-item" href={'https://www.sevencorners.com/login'}>Customer Login</a></li>
                        <li><a className="dropdown-item" href={'https://agents.sevencorners.com/'}>Agent Login</a></li>
                    </ul>
                </div>
                <Nav.Link href={'#'} className={`${'styles.navLink'} px-0 pt-2 ps-0 ps-lg-3 text-white`}>
                    <span id={searchBtn}>
                        <i className={`${'styles.utilIcon'} fa-solid fa-magnifying-glass pe-2`}></i>
                        Search
                    </span>
                </Nav.Link>
            </div>
        </>
    )
}
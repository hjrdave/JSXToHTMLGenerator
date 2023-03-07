import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from "../../Header.module.scss";

interface Props {

}

export default function UtilNavItems({ }: Props) {

    const searchBtn = 'header-util-search-btn';

    return (
        <>
            <div className={'d-flex flex-column flex-lg-row justify-sm-content-end justify-md-content-center align-content-center'}>
                <p className={'mb-0 ps-0 pt-2 pe-2'}>
                    <small className={`text-white`}>
                        Need help? 800-335-0611&nbsp;&nbsp;&nbsp;<span className={"d-none d-lg-inline-block"}>|</span>
                    </small>
                </p>
                <Nav.Link href={'https://www.sevencorners.com/about/contact'} className={`px-0 pt-2 mt-2 mt-md-0 pt-lg-2 ps-0 ps-lg-2 text-white`}>
                    <i className={`fa-solid fa-phone pe-2`}></i>
                    Contact
                </Nav.Link>
                <div className="nav-item dropdown">
                    <button className={`btn dropdown-toggle text-white px-0 pt-2 ps-0 ps-lg-3`} data-bs-toggle="dropdown" aria-expanded="false">
                        <i className={`fa-solid fa-right-to-bracket pe-2`}></i>
                        Login
                    </button>
                    <ul className={`dropdown-menu`}>
                        <li><a className="dropdown-item" href={'https://www.sevencorners.com/login'}>Customer Login</a></li>
                        <li><a className="dropdown-item" href={'https://agents.sevencorners.com/'}>Agent Login</a></li>
                    </ul>
                </div>
                <Nav.Link href={'#'} className={`px-0 pt-2 ps-0 ps-lg-3 text-white`} data-bs-toggle="modal" data-bs-target="#headerSearchModal">
                    <span id={searchBtn}>
                        <i className={`fa-solid fa-magnifying-glass pe-2`}></i>
                        Search
                    </span>
                </Nav.Link>
            </div>
        </>
    )
}
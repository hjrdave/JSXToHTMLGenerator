import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavItemDropdown.module.scss';

interface Props {
    title: string;
    children?: JSX.Element | JSX.Element[];
    icon?: JSX.Element;
};

export default function NavItemDropdown({ children, title, icon }: Props) {

    return (
        <>
            <Accordion defaultActiveKey="0" flush className={`${styles.compContainer} pb-2`}>
                <Accordion.Item eventKey="0" className={''}>
                    <Accordion.Header className={'pb-2 px-3'}>{icon}{title}</Accordion.Header>
                    <Accordion.Body className={'px-1'}>
                        {children}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
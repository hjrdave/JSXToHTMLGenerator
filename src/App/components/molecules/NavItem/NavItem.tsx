import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
    icon?: JSX.Element;
    text?: string;
    path?: string;
    subItems?: {
        text?: string;
        path?: string;
    }[];
    className?: string;
}

export default function NavItem({ text, path, subItems, className, icon }: Props) {

    return (
        <>
            {
                (subItems) ?
                    <NavDropdown title={<>{icon}{text}</>} className={className}>
                        {
                            subItems?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Link to={(item?.path) ? item.path : '/'} style={{ textDecoration: 'none', width: '100%' }}>
                                        <NavDropdown.Item as={'span'}>
                                            {item?.text}
                                        </NavDropdown.Item>
                                    </Link>
                                </React.Fragment>
                            ))
                        }
                    </NavDropdown> :
                    <Link to={(path) ? path : '/'} className={className} style={{ textDecoration: 'none', width: '100%' }}>
                        <>{icon}{text}</>
                    </Link>
            }
        </>
    )
}
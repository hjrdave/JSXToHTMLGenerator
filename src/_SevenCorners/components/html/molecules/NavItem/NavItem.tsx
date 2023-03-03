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
                                    <NavDropdown.Item>
                                        <Link to={(item?.path) ? item.path : '/'} style={{ textDecoration: 'none' }}>
                                            {item?.text}
                                        </Link>
                                    </NavDropdown.Item>
                                </React.Fragment>
                            ))
                        }
                    </NavDropdown> :
                    <Link to={(path) ? path : '/'} className={className} style={{ textDecoration: 'none' }}>
                        {text}
                    </Link>
            }
        </>
    )
}
import React from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';

interface Props {
    label?: string;
    title: string | JSX.Element;
    icon?: JSX.Element;
    children?: JSX.Element | JSX.Element[];
    size?: 'sm' | 'lg';
    onClick?: () => void;
    variant?: 'secondary' | 'primary';
};

export default function ButtonWithModel({ label, title, icon, children, size, onClick, variant }: Props) {

    const [show, setShow] = React.useState(false);

    return (
        <>
            <Modal
                show={show}
                size={size}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton className={'py-2'}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
            <Button variant={(variant) ? variant : 'secondary'} onClick={() => setShow(true)}>{icon}{label}</Button>
        </>
    )
}
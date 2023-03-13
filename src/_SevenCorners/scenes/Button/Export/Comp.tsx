import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { IExport } from './interfaces';
import styles from './Button.module.scss';

export default function Comp({ }: IExport.Props) {

    return (
        <>
            <div className={styles.compContainer} style={{ width: '100%' }}>
                <Row>
                    <Col>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                        <Button variant="success">Success</Button>{' '}
                        <Button variant="warning">Warning</Button>{' '}
                        <Button variant="danger" className={'bg-gradient'}>Danger</Button>{' '}
                        <Button variant="info" className={'bg-gradient'}>Info</Button>{' '}
                        <Button variant="light" className={'bg-gradient'}>Light</Button>{' '}
                        <Button variant="dark" className={'bg-gradient'}>Dark</Button>
                        <Button variant="link">Link</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-4'}>
                        <Button variant="outline-primary">Primary</Button>{' '}
                        <Button variant="outline-secondary">Secondary</Button>{' '}
                        <Button variant="outline-success">Success</Button>{' '}
                        <Button variant="outline-warning">Warning</Button>{' '}
                        <Button variant="outline-danger">Danger</Button>{' '}
                        <Button variant="outline-info">Info</Button>{' '}
                        <Button variant="outline-light">Light</Button>{' '}
                        <Button variant="outline-dark">Dark</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-4'}>
                        <Button variant="primary" size="lg" className={"bg-gradient"}>
                            Large button
                        </Button>{' '}
                        <Button variant="secondary" size="lg" className={"bg-gradient"}>
                            Large button
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-4'}>
                        <Button variant="primary" size="sm" className={"bg-gradient"}>
                            Small button
                        </Button>{' '}
                        <Button variant="secondary" size="sm" className={"bg-gradient"}>
                            Small button
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-4'}>
                        <Button variant="primary" size="lg" disabled>
                            Primary button
                        </Button>{' '}
                        <Button variant="secondary" size="lg" disabled className={"bg-gradient"}>
                            Button
                        </Button>{' '}
                        <Button href="#" variant="secondary" size="lg" disabled>
                            Link
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

/*
:global(.btn-primary) {
        background-color: $primary;
        border: 1px solid $primary;
    }
    :global(.btn-secondary) {
        background-color: $secondary;
        border: 1px solid $secondary;
    }
    :global(.btn-success) {
        background-color: $success;
        border: 1px solid $success;
    }
    :global(.btn-danger) {
        background-color: $danger;
        border: 1px solid $danger;
    }
    :global(.btn-warning) {
        background-color: $warning;
        border: 1px solid $warning;
    }
    :global(.btn-info) {
        background-color: $info;
        border: 1px solid $info;
    }
    :global(.btn-dark) {
        background-color: $dark;
        border: 1px solid $dark;
    }
    :global(.btn-light) {
    }
    :global(.btn-link) {
    }

    :global(.btn-primary-outline) {
    }
    :global(.btn-secondary-outline) {
    }
    :global(.btn-success-outline) {
    }
    :global(.btn-danger-outline) {
    }
    :global(.btn-warning-outline) {
    }
    :global(.btn-info-outline) {
    }
    :global(.btn-dark-outline) {
    }
    :global(.btn-light-outline) {
    }
    :global(.btn-link-outline) {
    }
*/
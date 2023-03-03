import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

interface Props {
    total?: number;
    filtered?: number;
    className?: string;
}
export default function Counter({ total, filtered, className }: Props) {

    return (
        <>
            <ButtonGroup className={className}>
                <Button variant="secondary">
                    <i className="fa-solid fa-database pe-2"></i>
                    {(total !== undefined) ? total : 0}
                </Button>
                {
                    (filtered !== undefined) ?
                        <Button variant="secondary">
                            <i className="fa-solid fa-filter pe-2"></i>
                            {filtered}
                        </Button> : null
                }
            </ButtonGroup>
        </>
    )
}
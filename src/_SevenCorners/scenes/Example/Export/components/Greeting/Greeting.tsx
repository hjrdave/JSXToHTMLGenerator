import React from 'react';
import { } from 'react-bootstrap';

interface Props {
    message: string;
}
export default function Greeting({ message }: Props) {

    return (
        <>
            <p>{message}</p>
        </>
    )
}
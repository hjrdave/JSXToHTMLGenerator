import React from 'react';
import { Col } from 'react-bootstrap';
import MultiCodeEditor from '../../App/components/organisms/MultiCodeEditor';

export default function Scene() {

    return (
        <>
            <div className='w-100 pb-3'>
                <Col>
                    <MultiCodeEditor />
                </Col>
            </div>
        </>
    )
}
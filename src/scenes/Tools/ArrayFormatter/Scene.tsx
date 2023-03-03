import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CodeEditor from '../../../App/components/molecules/CodeEditor';

export default function Scene() {

    const [formattedArray, setFormattedArray] = React.useState<string | undefined>('');
    const cleanArrayString = (arrayString?: string) => {

        try {
            if (arrayString) {
                const arrayStringNoSpaces = arrayString.replace(/\s/g, '')
                const arrayStringNoSingleQuotes = arrayStringNoSpaces.replaceAll(`'`, `"`).replaceAll(' ', '').replaceAll(',]', ']');
                const array = arrayStringNoSingleQuotes.split(',');
                const arrayNoEmptyQuotes = array?.filter((item: string) => (item.length !== 0));
                const arrayNoDuplicates = new Set(arrayNoEmptyQuotes);
                const arrayStringReady = [...arrayNoDuplicates].toString();
                setFormattedArray(arrayStringReady);
            }

        } catch (e) {
            setFormattedArray((e as any).toString());
        }

    }

    return (
        <>

            <div className='d-flex justify-content-between w-100 pb-3'>
                {/* Buttons */}
            </div>
            <Col className={'w-100'}>
                <Row>
                    <Col>
                        <CodeEditor
                            type={'javascript'}
                            onChange={(value) => cleanArrayString(value)}
                            defaultValue={`//Paste original array here`}
                            height={'600px'}
                        />
                    </Col>
                    <Col>
                        <CodeEditor
                            type={'javascript'}
                            onChange={(value) => null}
                            defaultValue={`//formatted array outputed here`} value={formattedArray}
                            height={'600px'}
                        />
                    </Col>
                </Row>
            </Col>
        </>
    )
};
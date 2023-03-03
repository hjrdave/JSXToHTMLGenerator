import React from 'react';
import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Text, TextArea, Number, Email, Submit, Phone } from '@mediafishio/react-bootstrap-forms';
export default function Scene() {

    const [value, setValue] = React.useState('');

    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log(event)
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Row style={{ width: '100%' }} className={'d-flex justify-content-center'}>

                    <Col sm={'12'}>
                        <Row>
                            <Col>

                            </Col>
                            <Col className={'pt-4'}>
                                <p>Input: {value}</p>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                            <Col>
                                <Text
                                    name={"TextControl"}
                                    label={'Text Control'}
                                    placeholder={'Please type...'}
                                    required
                                    size={undefined}
                                    caption={'This is a text control.'}
                                    onChange={(e: any) => setValue(e.target.value)}
                                    debounceTime={200}
                                    isInvalid={false}
                                    isValid={false}
                                    disabled={false}
                                    readOnly={false}
                                    maxLength={undefined}
                                    plaintext={false}
                                    persist={true}
                                //prependControl={<InputGroup.Text id="basic-addon1">$</InputGroup.Text>}
                                //appendControl={<InputGroup.Text id="basic-addon1">%</InputGroup.Text>}
                                />
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>


        </>
    )
}
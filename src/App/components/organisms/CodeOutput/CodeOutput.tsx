import React from 'react';
import { saveAs } from 'file-saver';
import { Col, Row, Modal, Button, Form, InputGroup, Tab, Tabs, Nav, FormLabel, FormText } from 'react-bootstrap';
import CodeEditor from '../../molecules/CodeEditor';
import styles from './CodeOutput.module.scss';

interface Props {
    compProps?: {
        [key: string]: any;
    };
    bundlePath?: string;
    bundleSaveAs?: string;
    previewHtml?: string;
    tabContent?: {
        type: 'html' | 'css' | 'js' | 'cs' | 'cshtml';
        fileName: string;
        codeString: string;
    }[]
};

export default function CodeOutput({ bundlePath, bundleSaveAs, tabContent, previewHtml }: Props) {


    const [modalShow, setModalShow] = React.useState(false);
    const [activeKey, setActiveKey] = React.useState<string | null>((tabContent) ? tabContent[0].fileName : '');

    const onShow = () => {
        setModalShow(true);
    }



    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                dialogClassName={styles.dialogSize}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton className={'py-2'}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <i className="fa-solid fa-code pe-2"></i>Generated Code
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
                        <Row>
                            <Col className={'p-0'}>

                                <Tab.Container
                                    activeKey={activeKey as any}
                                    onSelect={(key) => setActiveKey(key)}
                                    mountOnEnter
                                    unmountOnExit
                                    transition={false}
                                >
                                    <>
                                        <Nav variant="tabs" defaultActiveKey={activeKey as any} className={'d-flex justify-content-between'}>
                                            <div className={'d-flex'}>
                                                {
                                                    tabContent?.map((tab, index) => (
                                                        <React.Fragment key={index}>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey={tab.fileName}>
                                                                    {tab.fileName}
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </div>
                                            <div className={'d-flex'}>
                                                <Nav.Item>
                                                    <Nav.Link eventKey={'Preview'}>
                                                        Preview
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey={'Exports'}>
                                                        <i className="fa-solid fa-file-export pe-1"></i>
                                                        Exports
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </div>
                                        </Nav>
                                        <Tab.Pane eventKey={'Preview'} title={`Preview`}>
                                            <Tab.Content style={{ height: '70vh' }}>
                                                <Col className={'p-0'}>
                                                    <CodeEditor
                                                        type={'html'}
                                                        height={'70vh'}
                                                        value={previewHtml}
                                                    />
                                                </Col>
                                            </Tab.Content>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey={'Exports'} title={'Exports'}>
                                            <Col className={'p-4'}>
                                                {
                                                    (bundlePath) ?
                                                        <>
                                                            <FormLabel>Widget Bundle</FormLabel>
                                                            <InputGroup>
                                                                <Form.Control size={'sm'} placeholder="Error" value={(bundleSaveAs) ? bundleSaveAs : 'scwidget.bundle.js'} readOnly />
                                                                <Button size={'sm'} onClick={() => saveAs(bundlePath, (bundleSaveAs) ? bundleSaveAs : 'scwidget.bundle.js')} variant='secondary'>
                                                                    <i className="fa-solid fa-file-export pe-1"></i>Export
                                                                </Button>
                                                            </InputGroup>
                                                            <FormText>
                                                                Run <code>build:widgets</code> npm script before exporting.
                                                            </FormText>
                                                        </>
                                                        : null
                                                }
                                            </Col>
                                        </Tab.Pane>
                                        {
                                            tabContent?.map((tab, index) => (
                                                <React.Fragment key={index}>
                                                    <Tab.Pane eventKey={tab.fileName} title={tab.fileName}>
                                                        <Col className={'p-0'}>
                                                            {
                                                                (tab.type === 'html') ?
                                                                    <CodeEditor
                                                                        type={'html'}
                                                                        height={'70vh'}
                                                                        value={tab.codeString}
                                                                    /> : null
                                                            }
                                                            {
                                                                (tab.type === 'css') ?
                                                                    <CodeEditor
                                                                        type={'css'}
                                                                        height={'70vh'}
                                                                        value={tab.codeString}
                                                                    /> : null
                                                            }
                                                            {
                                                                (tab.type === 'js') ?

                                                                    <CodeEditor
                                                                        type={'javascript'}
                                                                        height={'70vh'}
                                                                        value={tab.codeString}
                                                                    /> : null
                                                            }
                                                            {
                                                                (tab.type === 'cshtml') ?

                                                                    <CodeEditor
                                                                        type={'razor'}
                                                                        height={'70vh'}
                                                                        value={tab.codeString}
                                                                    /> : null
                                                            }
                                                            {
                                                                (tab.type === 'cs') ?

                                                                    <CodeEditor
                                                                        type={'csharp' as any}
                                                                        height={'70vh'}
                                                                        value={tab.codeString}
                                                                    /> : null
                                                            }
                                                        </Col>
                                                    </Tab.Pane>
                                                </React.Fragment>
                                            ))
                                        }
                                    </>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Col>
                </Modal.Body>
            </Modal>
            <div>
                <Button onClick={() => onShow()} variant='secondary' size="sm" className={"me-2"}>
                    <i className="fa-solid fa-code pe-2"></i>Source
                </Button>
            </div>
        </>
    )
}
import React from 'react';
import { Col, Row, Modal, Button, Form, InputGroup, Tab, Tabs, Nav, FormLabel, FormText } from 'react-bootstrap';
import CodeEditor from '../../molecules/CodeEditor';

interface ITabContent {
    type: 'html' | 'css' | 'js' | 'cs' | 'cshtml';
    fileName: string;
    codeString: string;
}
export default function MultiCodeEditor() {

    const [tabContent, setTabContent] = React.useState<ITabContent[]>([{
        type: 'html',
        fileName: 'foo1.html',
        codeString: ''
    }]);
    const [activeKey, setActiveKey] = React.useState<string | null>((tabContent) ? tabContent[0].fileName : '');

    return (
        <>
            <Tab.Container
                activeKey={activeKey as any}
                onSelect={(key) => setActiveKey(key)}
                mountOnEnter
                unmountOnExit
                transition={false}
            >
                <>
                    <Nav variant="tabs" defaultActiveKey={activeKey as any} className={'d-flex justify-content-between w-100'}>
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
                            <Nav.Item className={'px-3'} style={{ cursor: 'pointer' }} onClick={() => setTabContent([
                                ...tabContent, {
                                    type: 'html',
                                    fileName: `foo${tabContent.length + 1}.html`,
                                    codeString: ''
                                }
                            ])}>
                                <i className="fa-solid fa-circle-plus text-success"></i>
                            </Nav.Item>
                        </div>
                    </Nav>

                    {
                        tabContent?.map((tab, index) => {
                            const type = (tab.type === 'html') ? 'html' : (tab.type === 'css') ? 'css' : (tab.type === 'js') ? 'javascript' : (tab.type === 'cshtml') ? 'razor' : (tab.type === 'cs') ? 'c#' : 'html';
                            return (
                                <React.Fragment key={index}>
                                    <Tab.Pane eventKey={tab.fileName} title={tab.fileName}>
                                        <Col className={'p-0'}>
                                            <CodeEditor
                                                type={type}
                                                height={'75vh'}
                                                value={tab.codeString}
                                            />
                                        </Col>
                                    </Tab.Pane>
                                </React.Fragment>
                            )
                        }

                        )
                    }
                </>
            </Tab.Container>
        </>
    )
}
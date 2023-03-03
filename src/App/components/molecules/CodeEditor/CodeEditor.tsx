
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import Copy from '../../atoms/Copy';
import useClipboard from 'react-cork/use-clipboard';

import styles from './CodeEditor.module.scss';

interface Props {
    onChange?: (value?: string) => void;
    value?: string;
    type?: 'html' | 'css' | 'javascript' | 'razor' | 'c#';
    defaultValue?: string;
    height?: string;
};

export default function CodeEditor({ onChange: _onChange, value, type, defaultValue, height }: Props) {

    const clipboard = useClipboard();
    const [codeString, setCodeString] = React.useState(value);

    const onChange = (value?: string) => {
        setCodeString((value) ? value : '');
        if (_onChange) {
            _onChange(value);
        }
    }

    return (
        <>
            <div className={styles.compContainer}>
                <Col>
                    <div className={`${styles.title} d-flex justify-content-between align-items-center`}>
                        <p className="mb-0 ps-3 py-1 text-uppercase">{type}</p>
                        {/* <p onClick={() => clipboard.copyToClipboard(codeString)} className={`${styles.copyCode} mb-0 pe-3 py-1`}>
                            <i title="copy to clipboard" className="far fa-copy text-white pe-2"></i>
                            {clipboard.copyState}
                        </p> */}
                        <Copy value={codeString} className={"text-white"} />
                    </div>
                    <Editor
                        className={styles.editor}
                        height={(height) ? height : "400px"}
                        width={"100%"}
                        defaultLanguage={(type) ? type : 'html'}
                        defaultValue={defaultValue}
                        theme={'vs-dark'}
                        onChange={(value) => onChange(value)}
                        value={value}
                        options={{ wordWrap: "on" }}
                        onMount={(editor, monaco) => {
                            setTimeout(function () {
                                editor.getAction('editor.action.formatDocument').run();
                            }, 10)
                        }}
                    />
                    <div className={`${styles.footer} d-flex justify-content-between align-items-center py-2`}>

                    </div>
                </Col>
            </div>
        </>
    )
}

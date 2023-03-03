import React from 'react';
import { } from 'react-bootstrap';
import { IExport } from './interfaces';
import HelloWorld from './components/HelloWorld';
import Greeting from './components/Greeting';
import { initScripts } from './scripts';
import styles from './Example.module.scss';

export default function Comp({ }: IExport.Props) {

    React.useEffect(() => {
        initScripts();
    }, []);

    return (
        <>
            <div className={`${styles.compContainer}`}>
                <HelloWorld />
                <Greeting message={'This is a new Export Comp.'} />
            </div>
        </>
    )
}
import React from 'react';
import useClipboard from 'react-cork/useClipboard';
import styles from './Copy.module.scss';

interface Props {
    value?: string;
    className?: string;
};

export default function Copy({ value, className }: Props) {

    const clipboard = useClipboard();

    return (
        <>
            <p onClick={() => clipboard.copyToClipboard(value)} className={`${styles.compContainer} ${className} mb-0 pe-3 py-1`}>
                <i title="Copy to Clipboard" className="far fa-copy pe-2"></i>
                {clipboard.copyState}
            </p>
        </>
    )
}
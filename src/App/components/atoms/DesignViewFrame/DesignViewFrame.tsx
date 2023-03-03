import React from 'react';
import styles from './DesignViewFrame.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
    maxWidth?: string;
    className?: string;
};

export default function DesignViewFrame({ children, maxWidth, className }: Props) {

    return (
        <>
            <div className={`p-3 w-100 ${styles.compContainer} ${className}`} style={{ maxWidth: maxWidth }}>
                {children}
            </div>
        </>
    )
}
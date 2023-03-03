import React from 'react';
interface Props {
    path?: string;
    target?: '_blank' | '_self' | '_parent' | '_top' | string;
    className?: string;
    style?: React.CSSProperties;
    children?: JSX.Element | JSX.Element[] | string;
}

export default function Link({ path, target, className, style, children }: Props) {

    return (
        <>
            <a
                href={(path) ? path : '#'}
                target={target}
                rel="noopener"
                className={className}
                style={{ textDecoration: 'none', ...style }}
            >
                {children}
            </a>
        </>
    )
}
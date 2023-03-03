import React from 'react';
interface Props {
    style?: React.CSSProperties;
    path: string;
    className?: string;
    width?: string;
    height?: string;
    maxWidth?: string;
    alt?: string;
    loading?: "eager" | "lazy";
};

export default function Image({ style, path, className, width, height, alt, loading }: Props) {

    return (
        <>
            <img
                src={path}
                style={style}
                className={`img-fluid ${className}`}
                width={width}
                height={height}
                alt={alt}
                loading={loading}
            />
        </>
    )
}
import React from 'react';
interface Props{
    style?: React.CSSProperties;
    path: string;
    className?: string;
    width?: string;
    maxWidth?: string;
    alt?: string;
};

export default function Image({style, path, className, width, alt}: Props){

    return(
        <>
            <img src={path} style={style} className={`img-fluid ${className}`} width={width} alt={alt}/>
        </>
    )
}
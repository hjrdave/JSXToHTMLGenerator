import React from 'react';
import CompBuilder from '../../../App/components/templates/CompBuilder';
import Comp from './Export/Comp';
import props from './Export/props';

export default function Scene() {

    return (
        <>
            <CompBuilder
                name={'Header'}
                folderPath={'/SevenCorners'}
                compProps={props}
                CompToStaticHTML={Comp}
            >
                <Comp {...props} />
            </CompBuilder>
        </>
    )
};
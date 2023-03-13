import React from 'react';
import { Route, Outlet, Routes as RRRoutes } from 'react-router-dom';
import pageMap from '../page-map';

//App Pages
import Home from './scenes/Home';

//SC Comps
import SCExampleScene from '../_SevenCorners/scenes/Example';
import SCFooterScene from '../_SevenCorners/scenes/Footer';
import SCHeaderScene from '../_SevenCorners/scenes/Header';
import SCButtonScene from '../_SevenCorners/scenes/Button';

export default function Routes() {

    return (
        <>
            <RRRoutes>
                <Route path={'/'} element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path={'example'} element={<SCExampleScene />} />
                    <Route path={'footer'} element={<SCFooterScene />} />
                    <Route path={'header'} element={<SCHeaderScene />} />
                    <Route path={'button'} element={<SCButtonScene />} />
                </Route>
            </RRRoutes>
        </>
    )
}
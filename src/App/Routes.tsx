import React from 'react';
import { Route, Outlet, Routes as RRRoutes } from 'react-router-dom';

//App Pages
import Home from '../scenes/Home';
import CodeEditor from '../scenes/CodeEditor';

//Tools
//import ObjectMapperScene from '../scenes/Tools/ObjectMapper';
//import ArrayFormatterScene from '../scenes/Tools/ArrayFormatter';
//import SiteMapScene from '../scenes/Tools/SiteMap';

//SC Comps
import SCExampleScene from '../scenes/HtmlGenerators/Example';
import SCFooterScene from '../scenes/HtmlGenerators/Footer';
import SCHeaderScene from '../scenes/HtmlGenerators/Header';

//React Bootstrap Forms
import RBFDefaultScene from '../scenes/ReactBootstrapForms/Default';

export default function Routes() {

    return (
        <>
            <RRRoutes>
                <Route path={'/'} element={<Outlet />}>
                    <Route index element={<CodeEditor />} />
                    <Route path={'/code-editor'} element={<CodeEditor />} />
                    <Route path={'/html-generator'} element={<Outlet />}>
                        <Route path={'example'} element={<SCExampleScene />} />
                        <Route path={'footer'} element={<SCFooterScene />} />
                        <Route path={'header'} element={<SCHeaderScene />} />
                    </Route>
                    <Route path={'/react-bootstrap-forms'} element={<Outlet />}>
                        <Route path={'default'} element={<RBFDefaultScene />} />
                    </Route>
                    {/* <Route path={'/widgets'} element={<Outlet />}>
                        <Route path={'example'} element={<SCExampleWidgetScene />} />
                        <Route path={'dynamic-content-block'} element={<SCDynamicContentBlockScene />} />
                        <Route path={'api-manager'} element={<SCApiManagerScene />} />
                        <Route path={'api-manager-tester'} element={<SCApiManagerTesterScene />} />
                        <Route path={'claims'} element={<SCClaimsScene />} />
                    </Route> */}
                    {/* <Route path={'/tools'} element={<Outlet />}>
                        <Route path={'object-mapper'} element={<ObjectMapperScene />} />
                        <Route path={'array-formatter'} element={<ArrayFormatterScene />} />
                        <Route path={'site-map'} element={<SiteMapScene />} />
                    </Route> */}
                </Route>
            </RRRoutes>
        </>
    )
}
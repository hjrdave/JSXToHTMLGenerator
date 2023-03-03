import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../organisms/Header';
import Body from '../../organisms/Body';
import Footer from '../../organisms/Footer';
import './styles.global.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
};

export default function AppMain({ children }: Props) {

    return (
        <>
            <div className="App">
                <Router basename='/'>
                    <Header />
                    <div className={'d-flex'}>
                        <div style={{ height: 'calc(100vh - 50px)' }}></div>
                        <div className={'d-flex flex-column justify-content-between'} style={{ width: '100%' }}>
                            <Body>
                                {children}{/** Routes */}
                            </Body>
                            <Footer />
                        </div>
                    </div>
                </Router>
            </div>
        </>
    )
}
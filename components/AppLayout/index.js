import React from 'react';
/* CONTEXT STATE */
import ColorState from '../../context/Color/ColorState';
/* COMPONENTS */
import Header from '../Header';
import Navbar from '../Navbar';
import layout from './Layout.module.css'

const AppLayout = ({ children }) => {
    return (
        <>
            <div className={layout.app_wrapper}>
                <Navbar></Navbar>
                <ColorState>
                    <main className={layout.main_section}>
                        <Header />
                        {children}
                    </main>
                </ColorState>
            </div>
        </>
    );
}
export default AppLayout;
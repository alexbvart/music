import React from 'react';
import Navbar from '../Navbar';
import layout from './Layout.module.css'

const AppLayout = ({ children }) => {
    return (
        <>
            <div className={layout.app_wrapper}>
                <Navbar></Navbar>
                <main className={layout.main_section}>
                    { children }
                </main>
            </div>
        </>
    );
}
export default AppLayout;
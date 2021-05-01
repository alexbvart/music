import React from 'react';

/* COMPONENTS */
import Header from '../Header';
import Navbar from '../Navbar';
import Player from '../Player';
import layout from './Layout.module.css'

const AppLayout = ({ children }) => {
    return (
        <>
            <div className={layout.app_wrapper}>
                <Navbar   className={layout.navbar} />
                <main className={layout.main_section}>
                    <Header />
                    {children}
                    <Player></Player>
                </main>
            </div>
        </>
    );
}
export default AppLayout;
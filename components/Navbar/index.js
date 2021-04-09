import React from 'react';
import navbar from './navbar.module.css'
import Auxona from '../../shares/icon/auxona/index'
import Liked from '../../shares/icon/liked';
import Recently from '../../shares/icon/Recently';
import Top from '../../shares/icon/Top';
import Playlist from '../../shares/icon/Playlist';
import Search from '../../shares/icon/Search';
const Navbar = () => {
    return (
        <>
            <nav className={navbar.nav_bar}>
                <div className={navbar.logo}>
                    <Auxona></Auxona>
                </div>
                <ul className={navbar.list}>
                    <li className={navbar.item}> <Liked />    Liked     </li>
                    <li className={navbar.item}> <Recently /> Recently  </li>
                    <li className={navbar.item}> <Top /> Top</li>
                    <li className={navbar.item}> <Playlist />  Playlist</li>
                    <li className={navbar.item}>  <Search /> Search</li>
                </ul>
        </nav>
        </>
    );
}
export default Navbar;
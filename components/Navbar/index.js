import React from 'react';
import navbar from './navbar.module.css'
import Auxona from '../../shares/icon/auxona/index'
import Liked from '../../shares/icon/liked';
import Recently from '../../shares/icon/Recently';
import Top from '../../shares/icon/Top';
import Playlist from '../../shares/icon/Playlist';
import Search from '../../shares/icon/Search';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className={navbar.nav_bar}>
                <div className={navbar.logo}>
                    <Link href="/ ">
                        <a>
                            <Auxona></Auxona>
                        </a>
                    </Link>
                </div>
                <ul className={navbar.list}>
                    <li className={navbar.item}>
                        <Link href="/#Liked">
                            <a>
                                <Liked /> Liked
                            </a>
                        </Link>
                    </li>

                    <li className={navbar.item}>
                        <Link href="/#Recently">
                            <a>
                                <Recently /> Recently
                            </a>
                        </Link>
                    </li>

                    <li className={navbar.item} >
                        <Link href="/#Top">
                            <a>
                                <Top /> Top
                            </a>
                        </Link>
                    </li>

                    <li className={navbar.item}>
                        <Link href="/#Playlist">
                            <a>
                                <Playlist /> Playlist
                            </a>
                        </Link>
                    </li>

                    <li className={navbar.item}> 
                        <a>
                            <Search /> Search
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;
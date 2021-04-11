import React from 'react';
import heroap from './heroallpages.module.css';
const HeroAllPages = () => {
    return ( 
        <div className={heroap.container}>
            <div className={heroap.img} />
            <div className={heroap.header}>
                <img src="https://e-cdns-images.dzcdn.net/images/cover/83ccb7389fc36648b70c6d7865fcdf25/380x380-000000-80-0-0.jpg" alt=""/>
                <article className="average-font-size-medium">
                    <div className="average-font-size-bold" >Album|Playlist</div>
                    <h1 className="title-headers">OASIS</h1>
                    <h2 className="average-font-size-semi-bold">JBalbin|description</h2> 
                    <span>8</span>song
                </article>
            </div>
        </div>
    );
}
export default HeroAllPages;
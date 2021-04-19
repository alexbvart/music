import React from 'react';
import CoverImage from '../../shares/CoverImage';
import heroallpages from './heroallpages.module.css';

import Subtitle from './subtitle';
import Title from './title';

const HeroAllPages = ({ data }) => {


    return (
        <>
        <div className={heroallpages.container}>

            <figure className={heroallpages.img} />
            
            <div className={heroallpages.header}>
                <img 
                    className={heroallpages.cover_block}
                    src={data.picture_medium||data.cover_medium} 
                    alt={data.title} 
                    width={236}
                    height={236}
                />

                <article className="average-font-size-medium">
                    <div className="average-font-size-bold" >| {data.type} </div>

                    <Title type={data.type} data={data}/>
                    <Subtitle type={data.type} data={data}/>
                    <span>{data.nb_tracks||data.nb_album} </span>song
                </article>
            </div>

            <style global jsx>{`
                figure:before{
                    background-image: 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.2) 90%), 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.3) 95%), 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 1) 100%), 
                        /* * oscurece la parte inferior de la caratula, para al aplicarle el filtro lighten, lo tome como negativo  */
                        url(${data.picture_xl||data.cover_xl});
            }
            `}</style>
        </div>
        </>
    );
}
export default HeroAllPages;
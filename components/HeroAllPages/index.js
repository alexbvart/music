import React from 'react';
import heroallpages from './heroallpages.module.css';
const HeroAllPages = ({ data }) => {

    return (
        <>
        <div className={heroallpages.container}>

            <figure className={heroallpages.img} />
            
            <div className={heroallpages.header}>
                <img 
                    src={data.picture_medium} 
                    alt={data.title} 
                    loading="lazy"
                    srcSet={`${data.picture_big} 2x, 
                            ${data.picture_big}  768w, 
                            ${data.picture_xl}  768w 2x, 
                            ${data.picture_xl}, 
                            ${data.picture_xl} 2x` }
                />
                <article className="average-font-size-medium">
                    <div className="average-font-size-bold" >| {data.type} </div>
                    <h1 className="title-headers">{data.title.substring(0,40) } </h1>
                    <h2 className="average-font-size-semi-bold">{data.description.substring(0,80)} </h2>
                    <span>{data.nb_tracks} </span>song
                </article>
            </div>

            <style global jsx>{`
                figure:before{
                    background-image: 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.2) 90%), 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.3) 95%), 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 1) 100%), 
                        /* * oscurece la parte inferior de la caratula, para al aplicarle el filtro lighten, lo tome como negativo  */
                        url(${data.picture_xl});
            }
            `}</style>
        </div>
        </>
    );
}
export default HeroAllPages;
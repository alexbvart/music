import React from 'react';
import heroap from './heroallpages.module.css';
const HeroAllPages = ({ data }) => {
    return (
        <div className={heroap.container}>
            <figure className={heroap.img} />
            <div className={heroap.header}>
                <img src={data.img} alt={data.title} />
                <article className="average-font-size-medium">
                    <div className="average-font-size-bold" >| {data.type} </div>
                    <h1 className="title-headers">{data.title} </h1>
                    <h2 className="average-font-size-semi-bold">{data.description} </h2>
                    <span>{data.list.length} </span>song
                </article>
            </div>

            <style global jsx>{`
                figure:before{
                    background-image: 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.25) 80%), 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.6) 95%), 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 1) 100%), 
                        /* * oscurece la parte inferior de la caratula, para al aplicarle el filtro lighten, lo tome como negativo  */
                        url(${data.img});
            }
            `}</style>
        </div>
    );
}
export default HeroAllPages;
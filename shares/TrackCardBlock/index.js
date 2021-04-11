import React from 'react';
import block from './TrackCardBlock.module.css'
const TrackCardBlock = ({img,title,description}) => {
    return ( 
        <>
            <article className={block.card}>
                <img src={img} alt={title} />
                <h3 className="average-font-size-semi-bold">{title} </h3>
                <span className="description-font-size-medium">{description} </span>
            </article>
        </>
    );
}
export default TrackCardBlock;
import React from 'react';
import CoverImage from '../CoverImage';
import block from './TrackCardBlock.module.css'
const TrackCardBlock = ({title,description,images}) => {

    return ( 
        <>
            <article className={block.card}>
                {/* <img src={img} alt={title} /> */}
                <CoverImage
                        width={190}
                        height={190}
                        alt={title} 
                        src={images} 
                    />
                <h3 className="average-font-size-semi-bold">{title} </h3>
                <span className="description-font-size-medium">{description} </span>
            </article>
        </>
    );
}
export default TrackCardBlock;
/* small={images.cover_medium}
medium={images.cover_big}
big={images.cover_big}
xl={images.cover_xl} */
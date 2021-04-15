import React from 'react';
import CoverImage from '../CoverImage';
import block from './TrackCardBlock.module.css'
const TrackCardBlock = ({title,description,album}) => {
    console.log(".........",title,description,album);
    return ( 
        <>
            <article className={block.card}>
                {/* <img src={img} alt={title} /> */}
                <CoverImage 
                        width={190}
                        height={190}
                        alt={title} 
                        src={album.cover_medium||album.picture_small} 
                        small={album.cover_medium||album.picture_medium}
                        medium={album.cover_big||album.picture_big}
                        big={album.cover_big||album.picture_big}
                        xl={album.cover_xl||album.picture_xl}
                    />
                <h3 className="average-font-size-semi-bold">{title} </h3>
                <span className="description-font-size-medium">{description} </span>
            </article>
        </>
    );
}
export default TrackCardBlock;
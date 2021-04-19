import React from 'react';
import CoverImage from '../CoverImage';
import artistBadge from './ArtistBadge.module.css'

const ArtistBadge = ({contributor}) => {
    return ( 
        <div className={artistBadge.badge}>
            <CoverImage 
                className={artistBadge.badge_cover_image}
                alt={contributor.name}
                width={32}
                height={32}
                src={contributor.picture_medium}
            />
            <span  className={artistBadge.badge_text}>
                {contributor.name}
            </span> 

        </div>
    );
}
export default ArtistBadge;
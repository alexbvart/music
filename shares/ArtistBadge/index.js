import React from 'react';
import Link from 'next/link'

import CoverImage from '../CoverImage';

import artistBadge from './ArtistBadge.module.css'

const ArtistBadge = ({ contributor ,size=32}) => {
    return (
        <div className={artistBadge.badge}>
            <CoverImage
                className={artistBadge.badge_cover_image}
                alt={contributor.name}
                width={size}
                height={size}
                src={contributor.picture_medium}
            />
            <span className={artistBadge.badge_text}>
                <Link href={`/artist/${contributor.id}`}>
                    <a>{contributor.name}</a>
                </Link>
            </span>

        </div>
    );
}
export default ArtistBadge;
import React from 'react';
import Link from 'next/link'

import CoverImage from '../../../shares/CoverImage';

import artistBadge from './ArtistBadge.module.css'

const Avatar = ({ userPhoto, userName, id }) => {
    return (
        <div className={artistBadge.badge}>
            <span className={artistBadge.badge_text}>
                <Link href={`/user/${id}`}>
                    <a>{userName}</a>
                </Link>
            </span>
            <CoverImage
                alt={userName}
                className={artistBadge.badge_cover_image}
                height={32}
                src={userPhoto}
                width={32}
            />
        </div>
    );
}
export default Avatar;
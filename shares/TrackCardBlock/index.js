import React from 'react';
import Link from 'next/link';

import CoverImage from '../CoverImage';
import block from './TrackCardBlock.module.css'

const TrackCardBlock = ({ title, description, images, album, artist }) => {

    return (
        <>
            <article className={block.card}>
                {/* <img src={img} alt={title} /> */}
                <CoverImage
                    width={190}
                    height={190}
                    alt={title}
                    src={`https://cdns-images.dzcdn.net/images/cover/${images}/500x500-000000-80-0-0.jpg`}
                />
                {
                    (album) ?
                        <Link href={`/album/${album.id}`}>
                            <a>
                                <h3 className="average-font-size-semi-bold">{title} </h3>
                            </a>
                        </Link>
                        :
                        <h3 className="average-font-size-semi-bold">{title} </h3>
                }
                {
                    (album) ?
                        <Link href={`/artist/${artist.id}`}>
                            <a>
                                <span className="description-font-size-medium">{artist.name} </span>
                            </a>
                        </Link>
                        :
                        <span className="description-font-size-medium">{artist.name} </span>
                }
                {/*< span className="description-font-size-medium">{description} </span> */}
            </article>
        </>
    );
}
export default TrackCardBlock;
/* small={images.cover_medium}
medium={images.cover_big}
big={images.cover_big}
xl={images.cover_xl} */
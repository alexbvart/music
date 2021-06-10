import React, { useState } from 'react';
import Link from 'next/link';

import CoverImage from '../CoverImage';
import block from './TrackCardBlock.module.css'


import useImageUrl from '../../hooks/useImageUrl';
import Play from '../icon/Play';

const TrackCardBlock = ({ title, images, album, artist, type, id }) => {

    const imgUrl = useImageUrl(type, images)
    const shortTitle = title.length >= 36 ? `${title.substring(0,36)}...` : title;
    const shortArtist= artist.name.length >= 32 ? `${artist.name.substring(0,32)}...` : artist.name;

    const [ShowPlay, setShowPlay] = useState(false)

    return (
        <>
            <article className={block.card}
                onMouseEnter={() => setShowPlay(true)}
                onMouseLeave={() => setShowPlay(false)}
            >
                
                <div className={block.imageWrapper}>
                    <CoverImage
                        width={190}
                        height={190}
                        alt={title}
                        src={imgUrl}
                    />
                    {ShowPlay && <Play />}
                </div>



                {
                    (album) ?
                        <Link href={`/album/${album.id}`}>
                            <a>
                                <h3 className="average-font-size-semi-bold">{shortTitle} </h3>
                            </a>
                        </Link>
                        :
                        <Link href={`/playlist/${id}`}>
                            <a>
                                <h3 className="average-font-size-semi-bold">{shortTitle} </h3>
                            </a>
                        </Link>
                }
                {
                    (album) ?
                        <Link href={`/artist/${artist.id}`}>
                            <a>
                                <span className="description-font-size-medium">{shortArtist} </span>
                            </a>
                        </Link>
                        :
                        <span className="description-font-size-medium">{shortArtist} </span>
                }
                {/*< span className="description-font-size-medium">{description} </span> */}
            </article>
        </>
    );
}
export default TrackCardBlock;

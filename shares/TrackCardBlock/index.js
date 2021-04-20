import React from 'react';
import Link from 'next/link';

import CoverImage from '../CoverImage';
import block from './TrackCardBlock.module.css'

import useImageUrl from '../../hooks/useImageUrl';

const TrackCardBlock = ({ title, images, album, artist, type ,id}) => {

    const imgUrl = useImageUrl(type,images)

    return (
        <>
            <article className={block.card}>
                {/* <img src={img} alt={title} /> */}
                <CoverImage
                    width={190}
                    height={190}
                    alt={title}
                    src={imgUrl}
                />
                {
                    (album) ?
                        <Link href={`/album/${album.id}`}>
                            <a>
                                <h3 className="average-font-size-semi-bold">{title} </h3>
                            </a>
                        </Link>
                        :
                        <Link href={`/playlist/${id}`}>
                            <a>
                                <h3 className="average-font-size-semi-bold">{title} </h3>
                            </a>
                        </Link>
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
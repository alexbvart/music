import React from 'react';
import Link from 'next/link'

import trackCardInline from './TrackCardInline.module.css'
import CoverImage from '../CoverImage';
import ArtistName from './ArtistName';
import PlayProvider from './PlayProvider';

import useDurationTrack from '../../hooks/useDurationTrack'
import useImageUrl from '../../hooks/useImageUrl';


const TrackCardInline = ({ images, name, artist, duration, album, type ,id}) => {

    const durationString = useDurationTrack(duration)
    const imgUrl = useImageUrl(type,images)

    return (
        <>
            <div className={trackCardInline.track}>
                <div className={trackCardInline.action} >
                    <PlayProvider images={imgUrl} name={name} artist={artist} duration={duration} id={id}/>
                </div>
                <div className={trackCardInline.track_info}>

                    {images !== "" ?
                        <CoverImage
                            alt={name}
                            src={imgUrl}
                        />
                        : ""
                    }
                    <div className="average-font-size-medium">
                        {
                            (album) ?
                                <Link href={`/album/${album.id}`}>
                                    <a>{name}</a>
                                </Link>
                                :
                                <Link href={`/playlist/${id}`}>
                                    <a>
                                        {name}
                                    </a>
                                </Link>
                        }
                        <br />
                        {artist && <ArtistName artist={artist} />}
                    </div>

                </div>
                <div className={trackCardInline.album}>
                    {album &&
                        <Link href={`/album/${album.id}`}>
                            <a>{album.title}</a>
                        </Link>
                    }
                </div>
                <div className={trackCardInline.duration}>
                    {durationString}
                </div>
            </div>
        </>
    );
}
export default TrackCardInline;
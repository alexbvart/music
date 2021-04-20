import React, { useEffect, useState } from 'react';
import trackCardInline from './TrackCardInline.module.css'
import useDurationTrack from '../../hooks/useDurationTrack'
import CoverImage from '../CoverImage';
import ArtistName from './ArtistName';

import Link from 'next/link'


const TrackCardInline = ({ images, name, artist, duration, album, type }) => {

    const durationString = useDurationTrack(duration)
    console.log(type);
    const [imgUrl, setImgUrl] = useState(`https://cdns-images.dzcdn.net/images/cover/${images}/500x500-000000-80-0-0.jpg`)

    useEffect(() => {
        if (type==="playlist") {
        setImgUrl(`https://cdns-images.dzcdn.net/images/playlist/${images}/500x500-000000-80-0-0.jpg`);
        } 
        return () => {
            
        }
    }, [])
    return (
        <>
            <div className={trackCardInline.track}>
                <div className={trackCardInline.action}>
                    Ø
                </div>
                <div className={trackCardInline.track_info}>
                    {/* todo probar esto y hacer un componente para cada imagen con su loading  */}

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
                                name 
                        }
                        <br />
                        {artist && <ArtistName artist={artist} />}
                    </div>

                </div>
                <div className={trackCardInline.album}>
                    {album &&
                        <Link href={`/album/${album.id}`}>
                            <a>{ album.title}</a>
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
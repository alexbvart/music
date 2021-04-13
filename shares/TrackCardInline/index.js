import React from 'react';
import trackCardInline from './TrackCardInline.module.css'
import useDurationTrack from '../../hooks/useDurationTrack'
const TrackCardInline = ({img,name,artist,duration,album}) => {

    const durationString = useDurationTrack(duration)

    return ( 
        <>
            <div className={trackCardInline.track}>
                <div className={trackCardInline.action}>
                    Ø
                </div>
                <div className={trackCardInline.track_info}>
                    <img src={img} alt={name} />
                    <div className="average-font-size-medium">
                        {name} <br />
                        <span className="description-font-size-medium">
                            {artist.name} 
                        </span>
                    </div>

                </div>
                <div className={trackCardInline.album}>
                    {album.title}
                </div>
                <div className={trackCardInline.duration}>
                    {durationString}
                </div>
            </div>
        </>
    );
}
export default TrackCardInline;
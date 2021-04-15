import React from 'react';
import trackCardInline from './TrackCardInline.module.css'
import useDurationTrack from '../../hooks/useDurationTrack'
import CoverImage from '../CoverImage';


const TrackCardInline = ({name,artist,duration,album}) => {

    const durationString = useDurationTrack(duration)
/*     console.log("data: ",name,artist,duration,album); */
    return ( 
        <>
            <div className={trackCardInline.track}>
                <div className={trackCardInline.action}>
                    Ø
                </div>
                <div className={trackCardInline.track_info}>
                {/* todo probar esto y hacer un componente para cada imagen con su loading  */}
                    <CoverImage 
                        alt={name} 
                        src={album.cover_small} 
                        small={album.cover_small}
                        medium={album.cover_medium}
                        big={album.cover_big}
                        xl={album.cover_xl}
                    />
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
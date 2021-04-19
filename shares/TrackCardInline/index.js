import React from 'react';
import trackCardInline from './TrackCardInline.module.css'
import useDurationTrack from '../../hooks/useDurationTrack'
import CoverImage from '../CoverImage';
import Artist from './ArtistName';
import ArtistName from './ArtistName';


const TrackCardInline = ({images="", name,artist,duration,album}) => {

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
                    
                    {images!==""?
                        <CoverImage 
                            alt={name} 
                            src={images} 
                        />                   
                    : "" 
                    }
                    <div className="average-font-size-medium">
                        {name} <br />

                        <ArtistName artist={artist} />
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
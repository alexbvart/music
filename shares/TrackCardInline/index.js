import React from 'react';
import trackCardInline from './TrackCardInline.module.css'
const TrackCardInline = ({img,name,artist}) => {
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
                        <span className="description-font-size-medium">{artist} </span>
                    </div>

                </div>
                <div className={trackCardInline.album}>
                    {name}
                </div>
                <div className={trackCardInline.duration}>
                    3:35
                </div>
            </div>
        </>
    );
}
export default TrackCardInline;
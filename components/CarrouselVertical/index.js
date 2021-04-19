import React from 'react';
import iamgesSrcSet from '../../repsitory/imagesSrcSet';
import TrackCardInline from '../../shares/TrackCardInline';
import carrouselVertical from './carrouselVertical.module.css' 
const CarrouselVertical = ({ title, subtitle = "", list=[] }) => {


    return (
        <>
            <section className="wrapper-margin">
                <header className={carrouselVertical.header}>
                    <div className="title-for-section">{title}</div>
                    {(subtitle !== "") ?
                        <>
                            <span className="average-font-size-medium"> </span> {subtitle}
                        </>
                        : <span />
                    }
                </header>

                <ul className={carrouselVertical.carrouselvertical} >
                    {
                        list.map((track) => (
                            <TrackCardInline 
                                images={track.album.cover_medium||""}
                                key={track.id} 
                                name={track.title_short} 
                                artist={track.artist||track.contributors} 
                                duration={track.duration}
                                album={track.album}
                            />
                        ))
                    }
                </ul>
            </section>

        </>
    );
}
export default CarrouselVertical;
import React from 'react';
import iamgesSrcSet from '../../repsitory/imagesSrcSet';
import TrackCardInline from '../../shares/TrackCardInline';
import carrouselVertical from './carrouselVertical.module.css' 
const CarrouselVertical = ({ title="", subtitle = "", list=[] }) => {


    return (
        <>
            <section className="wrapper-margin">
                <header className={carrouselVertical.header}>
                    <div className="title-for-section">{title && title} </div>
                    {(subtitle !== "") ?
                        <>
                            <span className="average-font-size-medium"> </span> {subtitle && subtitle}
                        </>
                        : <span />
                    }
                </header>

                <ul className={carrouselVertical.carrouselvertical} >
                    {
                        list.map((track) => (
                            <TrackCardInline 
                                key={track.id} 
                                id={track.id} 
                                album={track.album}
                                artist={track.contributors||track.artist} 
                                duration={track.duration}
                                images={track.md5_image}
                                name={track.title_short||track.title_short} 
                            />
                        ))
                    }
                </ul>
            </section>

        </>
    );
}
export default CarrouselVertical;
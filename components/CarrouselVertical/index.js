import React from 'react';
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
                            <span className="average-font-size-medium">66 </span> {subtitle}
                        </>
                        : <span />
                    }
                </header>

                <ul className={carrouselVertical.carrouselvertical} >
                    {
                        list.map((track) => (
                            <>
                                <TrackCardInline 
                                    key={track.id} 
                                    img={track.album.cover_xl} 
                                    name={track.title_short} 
                                    artist={track.artist} 
                                    duration={track.duration}
                                    album={track.album}
                                />
                            </>
                        ))
                    }
                </ul>
            </section>

        </>
    );
}
export default CarrouselVertical;
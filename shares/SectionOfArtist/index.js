import React from 'react';
import TrackCardInline from '../../shares/TrackCardInline';
import ArtistBadge from './ArtistBadge';
import carrouselVertical from './carrouselVertical.module.css' 
const SectionOfArtist = ({ title="", subtitle = "", list=[] }) => {


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

                <ul className={carrouselVertical.carrouselhorizontal} >
                    {
                        list.map((art) => (
                            <ArtistBadge contributor={art} size={180} />
                        ))
                    }
                </ul>
            </section>

        </>
    );
}
export default SectionOfArtist;
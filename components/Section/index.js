import React from 'react';
import TrackCardBlock from '../../shares/TrackCardBlock';
import TrackCardInline from '../../shares/TrackCardInline';
import section from './section.module.css'

import useWindowDimensions from '../../hooks/useWindowDimension';
import iamgesSrcSet from '../../repsitory/imagesSrcSet';


const Section = ({ title, subtitle = "", isPlayList = false, list = [] }) => {


    const windowDimensions = useWindowDimensions();
    const { width } = windowDimensions

    const typeCarrousel = isPlayList || width >= 560 ? section.carrouselhorizontal : section.carrouselvertical

    return (
        <>
            <section className="wrapper-margin">
                <header className={section.header}>
                    <div className="title-for-section">{title}</div>
                    {(subtitle !== "") ?
                        <>
                            <span className="average-font-size-medium">10 </span> {subtitle}
                        </>
                        : <span />
                    }
                </header>

                <ul className={typeCarrousel} >
                    {
                        list.map((track) => (
                            <>
                                {
                                    
                                    width <= 560 && !isPlayList ?
                                    (<TrackCardInline 
                                        key={track.id} 
                                        name={track.title} 
                                        artist={track.artist} 
                                        album={track.album} 
                                        images={track.album.cover_medium} 
                                    />)
                                    :
                                    (<TrackCardBlock 
                                        key={track.id} 
                                        title={track.title} 
                                        description={track.artist.name} 
                                        album={track.album} 
                                        images={track.album.cover_medium} 
                                    />)
                                }
                            </>
                        ))
                    }
                                        {/* images={iamgesSrcSet(track)}  */}
                </ul>
            </section>

        </>
    );
}
export default Section;


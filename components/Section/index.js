import React from 'react';
import TrackCardBlock from '../../shares/TrackCardBlock';
import TrackCardInline from '../../shares/TrackCardInline';
import section from './section.module.css'

import useWindowDimensions from '../../hooks/useWindowDimension';



const Section = ({ title, subtitle = "", isPlayList = false, list = [] }) => {


    const windowDimensions = useWindowDimensions();
    const { width } = windowDimensions
    console.log(isPlayList);

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
                                            album={track.album}
                                            artist={track.artist}
                                            images={track.md5_image}
                                            key={track.id}
                                            name={track.title}
                                            type={track.type}
                                            id={track.id}
                                        />)
                                        :
                                        (<TrackCardBlock
                                            album={track.album}
                                            artist={track.artist||track.user}
                                            images={track.md5_image}
                                            key={track.id}
                                            title={track.title}
                                            type={track.type}
                                            id={track.id}
                                        />)
                                }
                            </>
                        ))
                    }
                    {/* images={iamgesSrcSet(track)}  */}
                </ul>
            </section>

            <style jsx>{`
                section{
                    scroll-snap-align: center;
                }
            `}</style>

        </>
    );
}
export default Section;


import React, { useState } from 'react';
import TrackCardBlock from '../../shares/TrackCardBlock';
import TrackCardInline from '../../shares/TrackCardInline';
import section from './section.module.css'

import useWindowDimensions from '../../hooks/useWindowDimension';
import SeeMore from './SeeMore';



const Section = ({ title, subtitle = "", isPlayList = false, list = [] }) => {

    const [statusSee, setStatusSee] = useState(false)


    const windowDimensions = useWindowDimensions();
    const { width } = windowDimensions

    const typeCarrousel = isPlayList || width >= 560 ? section.carrouselhorizontal : section.carrouselvertical
    return (
        <>
            <section className={`${section.wrapper} wrapper-margin`} >
                <header className={section.header}>
                    <div className={section.header_info}>
                        <div className="title-for-section">{title}</div>
                        {(subtitle !== "") ?
                            <>
                                <span className="average-font-size-medium"> {list.length}</span> 
                                <span> {`${subtitle}`}</span> 
                            </>
                            : <span />
                        }
                    </div>
                    {   width >= 560 && <>
                            <div onClick={() => setStatusSee(!statusSee)}>
                                    <SeeMore status={statusSee} />
                            </div>
                        </>}
                </header>

                <ul className={typeCarrousel} >
                    {
                        list.map((track,index) => (
                            <>
                                <div className={(index>4 && !statusSee) && section.card_hidden}>
                                
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
                                            title={track.title }
                                            type={track.type}
                                            id={track.id}
                                        />)
                                }</div>
                            </>
                        ))
                    }
                    {/* images={iamgesSrcSet(track)}  */}
                </ul>

                {   width <= 560 && <>
                        <div onClick={() => setStatusSee(!statusSee)}>
                                <SeeMore status={statusSee} />
                        </div>
                    </>}

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


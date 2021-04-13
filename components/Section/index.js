import React from 'react';
import TrackCardBlock from '../../shares/TrackCardBlock';
import TrackCardInline from '../../shares/TrackCardInline';
import section from './section.module.css'

import useWindowDimensions from '../../hooks/useWindowDimension';
const Section = ({ title, subtitle = "", isPlayList = false, list=[] }) => {

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
                            <span className="average-font-size-medium">66 </span> {subtitle}
                        </>
                        : <span />
                    }
                </header>

                <ul className={typeCarrousel} >
                    {
                        list.map((track) => (
                            <>
                                {width <= 560 && !isPlayList ?

                                    <TrackCardInline key={track.id} img={track.album.cover_xl} name={track.title} artist={track.artist.name} />
                                    :
                                    <TrackCardBlock key={track.id} img={track.album.cover_xl} title={track.title} description={track.artist.nam} />
                                }
                            </>
                        ))
                    }
                </ul>
            </section>

        </>
    );
}
export default Section;

/* Section.getInitialProps = async () => {
    return fetch('http://localhost:3000/api/liked')
        .then(res=>res.json())

} */
import React from 'react';
import ArtistBadge from '../../shares/ArtistBadge';
import subtitle from './subtitle.module.css'
const Subtitle = ({type,data}) => {

    if (type === "playlist") {
        return ( 
            <>
                <h2 className="average-font-size-semi-bold">{data.description.substring(0,80)} </h2>
            </>
        );
    }

    if (type === "album") {
        return ( 
            <>   
            <h2 className="average-font-size-semi-bold">
                <div className={subtitle.container_badges} >
                    {data.contributors.map((contributor) => (
                        <>
                            <ArtistBadge contributor={contributor} />  
                        </>
                    ))} 
                </div>
            </h2>
            </>
        );
    }

    if (type === "artist") {
        return ( 
            <>   
                <h2 className="average-font-size-semi-bold"></h2>
            </>
        );
    }

}
export default Subtitle;
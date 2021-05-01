import React, { useContext, useState } from 'react';

import TrackContext from '../../../context/Track/TrackContext';

import ArtistName from '../../../shares/TrackCardInline/ArtistName';

import info from './info.module.css'

const Info = () => {

    const { expand } = useContext(TrackContext)


    const name = "All Night (feat. Ally Brooke)"
    const artist = {
        "id": 169361,
        "name": "Afrojack",
        "link": "https://www.deezer.com/artist/169361",
        "tracklist": "https://api.deezer.com/artist/169361/top?limit=50",
        "type": "artist"
    }

    return (
        <>
            <div className="average-font-size-medium info" >
                {name && name}
                <br />
                {artist &&
                    <div className="artist">
                        <ArtistName artist={artist} />
                    </div>
                }
            </div>

            {expand ?
                <style jsx>{`
                        .info{
                            grid-area: info;
                        }
                        .artist{
                            background: red;
                            display: block;
                        }
                `}</style>

                :
                <style jsx>{`
                    .info{
                        grid-area: info;
                        display: flex;
                        flex-direction: column;
                        align-items:flex-start;
                        justify-content: center;
                    }

                    @media screen and (max-width: 860px) {
                        .artist{
                            display: none;
                            background-color: red;
                        }
                    }
                `}</style>
            }

        </>
    );
}
export default Info;
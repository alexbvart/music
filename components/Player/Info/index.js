import React, { useContext, useState } from 'react';

import TrackContext from '../../../context/Track/TrackContext';

import ArtistName from '../../../shares/TrackCardInline/ArtistName';

import info from './info.module.css'

const Info = () => {

    const {name,artist, expand , lightVibrant} = useContext(TrackContext)



    return (
        <>
            <div className="average-font-size-medium info" >
                {name && name}
                <br />
                
                    <div className="artist">
                        {artist && <ArtistName artist={artist} />}
                    </div>
                
            </div>

            {expand ?
                <style jsx>{`
                        .info{
                            grid-area: info;
                            color: ${lightVibrant}
                        }
                        .artist{
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

                        color: ${lightVibrant}
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
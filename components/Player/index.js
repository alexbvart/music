import React, { useContext, useEffect, useState } from 'react';

import TrackContext from '../../context/Track/TrackContext';

import useColorBase from '../../hooks/useColorBase';
import useImageUrl from '../../hooks/useImageUrl';

import CoverImage from '../../shares/CoverImage';
import Actions from './Actions';
import Controls from './Controls';
import Info from './info';

import ArrowDown from '../../shares/icon/arrowDown'

import player from './player.module.css'

const Player = () => {

    const {images,name} = useContext(TrackContext)
    const type = "track"

    const [colorBase,baseGradient] = useColorBase(images,type)
    console.log("track: ", baseGradient);



    const {expand, setExpand} = useContext(TrackContext)
    const [imgSize, setImgSize] = useState(64)

    useEffect(() => {
        if (expand) {
            setImgSize(300)
        } else {
            setImgSize(64)
        }
        
    }, [expand])


    const asiStyles =  expand 
                        ? `${player.container__expand} ${player.container}` 
                        : `${player.container__contract} ${player.container}` 

    return (
        <>
            <aside className={asiStyles}  >
                <header className={player.header} onClick={()=>setExpand(!expand)}>
                    <ArrowDown />
                </header>
                <div className={player.coverImage} >
                    <CoverImage
                        alt={name}
                        src={images}
                        width={imgSize}
                        height={imgSize}
                    />
                </div>
                <Controls />
                <Info />
                <Actions/>
            </aside>

            { expand ? 
            
                (
                    <style jsx>{`
                        aside {
                            height: 100vh;
                            background-image: ${baseGradient}
                        }
                    `}</style>
                ):
                (
                    <style jsx>{`
                        aside {
                            height: 112px;

                            background-image: linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(23, 23, 23, 0.6) 100%);   

                        }
                    `}</style>
                    
                )
            
            }


            

        </>
    );
}
export default Player;
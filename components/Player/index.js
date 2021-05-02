import React, { useContext, useEffect, useState } from 'react';

import TrackContext from '../../context/Track/TrackContext';


import CoverImage from '../../shares/CoverImage';
import Actions from './Actions';
import Controls from './Controls';
import Info from './info';

import ArrowDown from '../../shares/icon/arrowDown'

import player from './player.module.css'
import useColorTrack from '../../hooks/useColorTrack';
import useWindowDimensions from '../../hooks/useWindowDimension';
import CoverFigureHeader from '../../shares/CoverFigureHeader';

const Player = () => {

    const {images,name} = useContext(TrackContext)

    const windowSize = useWindowDimensions()
    const {width} = windowSize;

    const [darkMuted,lightVibrant] = useColorTrack(images)


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
                    { !expand ?
                        <CoverImage
                        alt={name}
                        src={images}
                        width={imgSize}
                        height={imgSize}
                    />
                    : <CoverFigureHeader images={images} />}
                </div>
                <Controls />
                <Info />
                <Actions/>
            </aside>


            { expand ? 
            
                (
                    <style jsx>{`
                        aside {
                            max-width: 560px;
                            height: 100vh;
                            background-image: linear-gradient(341.09deg, #131213 50%, ${darkMuted}  100%);

                            right: 0;
                            margin-left: auto;
                            
                            transition: all 0.3s ease-in 0.1s;
                            
                        }
                    `}</style>
                ):
                (
                    <style jsx>{`
                        aside {
                            height: 112px;
                            background-image: linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(23, 23, 23, 0.6) 100%);   
                            transition: all 0.2s ease-in;
                        }
                    `}</style>
                    
                )
            
            }


            

        </>
    );
}
export default Player;
{/*  */}
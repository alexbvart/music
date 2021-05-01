import React, {useContext, useState} from 'react';
import TrackContext from '../../../context/Track/TrackContext';

/* COMPONENTS */


import FavoriteButton from '../../../shares/Actions/Favorite';
import ShufleButton from '../../../shares/Actions/Shufle';
import LoopButton from '../../../shares/Actions/Loop';
import PlayPause from '../../../shares/Actions/PlayPause';
import SkipNext from '../../../shares/icon/SkipNext';
import SkipPrevious from '../../../shares/icon/SkipPrevious';


import action from './actions.module.css'
const Actions = () => {

    const { expand } = useContext(TrackContext)


    return ( 
        <>
        <article className={`actions ${action.actions}`}>
            
            <div><SkipPrevious /></div> 
            <PlayPause />
            <div><SkipNext /></div>
            <LoopButton />
            <ShufleButton />
            <FavoriteButton />

        </article>
        
        
        {expand ?
                <style jsx>{`
                    .actions{ 
                    }
                    div{
                        outline: none;
                        margin: 0;
                    }
                    :root{
                        --z-nav: -1;
                    }
                    
                `}</style>

                :
                <style jsx>{`
                    /* * si componente esta minimizado */
                    .actions{
                    }

                    div{
                        outline: none;
                        margin: 0;
                    }

                    @media screen and (max-width: 860px) {
                        .actions{
                            box-sizing: border-box;
                            {/* background-color: red; */}

                        }
                        .actions div{
                            display: none;
                        }
                        .actions SVG{
                            display: block;
                        }
                        .actions div:nth-child(2){
                            display: block;
                        }
                    }
                `}</style>
            }
        </>
    );
}
export default Actions;
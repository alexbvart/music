import React, { useContext, useState } from 'react';
import TrackContext from '../../../context/Track/TrackContext';

import useDurationTrack from '../../../hooks/useDurationTrack';
import controls from './controls.module.css'

const Controls = () => {



    const {duration, expand } = useContext(TrackContext)
    const [counterValue, setCounterValue] = useState(0)
    
    const counterString = useDurationTrack(counterValue)
    const durationString = useDurationTrack(duration)

    const handleChange=(event)=>{
        setCounterValue(event.target.value)
    }


    return (
        <>
        <div className="controls">
            <div className={controls.slider_track}>
                <div className="slider-track-default">

                </div>
                <div class="slider-track-active gradient-default" >
                </div>
                    <input 
                        className="slider-track-input mousetrap" 
                        type="range" 
                        step="1" 
                        min="0" 
                        max={duration} 
                        aria-valuemin="0" 
                        aria-valuemax={duration}
                        onChange={(event)=>{handleChange(event)}}
                    />
            </div>

            <div className="timing description-font-size-medium" >
                {counterString}  /  {durationString}
            </div>
        </div>

        {expand ?
                <style jsx>{`
                    .controls{
                        grid-area: controls;
                    }
                    .timing{
                            background: red;
                            display: block;
                        }
                `}</style>

                :
                <style jsx>{`
                    .controls{
                        grid-area: controls;
                        display: flex;
                        flex-direction: column;
                        align-items:flex-start;
                        justify-content: center;
                    }

                    @media screen and (max-width: 860px) {
                        .timing{
                            display: none;
                        }


                    }
                `}</style>
            }
        </>
    );
}
export default Controls;

/*style="width: 36.8471%; will-change: width;"*
aria-valuenow={counter}
value={counter} 

*/
import React, {useState} from 'react';
import PlayOnly from '../../icon/PlayOnly'
import Pause from '../../icon/Pause'

const PlayPause = () => {

    const [play, setPlay] = useState(true)

    return ( 
        <div onClick={() => {setPlay(!play)}}>
            {play
            ? <PlayOnly />
            : <Pause />
            }
        </div>
    );
}
export default PlayPause;
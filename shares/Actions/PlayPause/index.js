import React, {useState} from 'react';
import PlayOnly from '../../icon/PlayOnly'
import Pause from '../../icon/Pause'

const PlayPause = ({fill="#fff"}) => {

    const [play, setPlay] = useState(true)

    return ( 
        <div onClick={() => {setPlay(!play)}}>
            {play
            ? <PlayOnly fill={fill} />
            : <Pause fill={fill} />
            }
        </div>
    );
}
export default PlayPause;
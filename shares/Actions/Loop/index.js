import React, {useState} from 'react';

import Loop from '../../icon/Loop'
import LoopOn from '../../icon/Loop/active'

const LoopButton = () => {

    const [loop, setLoop] = useState(false)

    return ( 
        <div onClick={() => {setLoop(!loop)}}>
            {loop
                ? <LoopOn />
                : <Loop />
            }
        </div>
    );
}
export default LoopButton;
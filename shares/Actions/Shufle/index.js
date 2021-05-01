import React, {useState} from 'react';

import Shufle from '../../icon/Shufle'
import ShufleOn from '../../icon/Shufle/active'

const ShufleButton = () => {

    const [shufle, setShufle] = useState(false)

    return ( 
        <div onClick={() => {setShufle(!shufle)}}>
            {shufle
                ? <ShufleOn />
                : <Shufle />
            }
        </div>
    );
}
export default ShufleButton;
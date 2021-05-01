import React, {useState} from 'react';

import Shufle from '../../icon/Shufle'
import ShufleOn from '../../icon/Shufle/active'

const ShufleButton = ({fill="#DEE1EC"}) => {

    const [shufle, setShufle] = useState(false)

    return ( 
        <div onClick={() => {setShufle(!shufle)}}>
            {shufle
                ? <ShufleOn />
                : <Shufle fill={fill} />
            }
        </div>
    );
}
export default ShufleButton;
import React, {useState} from 'react';
import TrackContext from './TrackContext';

const TrackState = ({children}) => {

    const [expand, setExpand] = useState(false)


    return ( 
        <TrackContext.Provider
            value={{
                expand, setExpand
            }}
        >
            {children}
        </TrackContext.Provider>
    );
}
export default TrackState;
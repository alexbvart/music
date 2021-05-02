import React, {useState} from 'react';
import useWindowDimensions from '../hooks/useWindowDimension';
const A = () => {
    const windowDimensions = useWindowDimensions();
    const { width,height } = windowDimensions
    return ( 
        <>
            --- width {width} ----
            ||| height {height} |||

        </>
    );
}
export default A;
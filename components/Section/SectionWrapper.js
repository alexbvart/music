import React from 'react';
import section from './sectionWrapper.module.css'

import useWindowDimensions from '../../hooks/useWindowDimension';



const SectionWrapper = ({ children }) => {


    const windowDimensions = useWindowDimensions();
    const { width } = windowDimensions

    const typeCarrousel =  width <= 560 ? section.carrouselhorizontal : section.carrouselvertical

    return (
        <>
                <div className={typeCarrousel} >
                    { children } 
                </div>
        </>
    );
}
export default SectionWrapper;


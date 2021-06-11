import React from 'react';
import {button} from './seemore.module.css'
const SeeMore = ({status}) => {

    if(status){
        return ( 
            <>
                <div className={button}>
                    See less results 
                </div> 
            </>
        );
    }else{
        return ( 
            <>
                <div className={button}>
                    See all results
                </div>
            </>
        );
    }

    
}
export default SeeMore;
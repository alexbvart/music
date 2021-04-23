import React from 'react';

/* CSS */
import wrapper48 from './Wrapper48.module.css'

const Wrapper48 = ({children,color='#c4c4c427'}) => {

    const style = {
        backgroundColor: color
    }

    return ( 
        <>
            <div className={wrapper48.wrapper48} style={style}>
                {children}
            </div>
        </>
    );
}
export default  React.memo(Wrapper48);
import React from 'react';

const Title = ({type,data}) => {
    
    if (type === "playlist"||type === "album") {
        return ( 
            <>
                <h1 className="title-headers">{data.title.substring(0,40)} </h1>
            </>
        );
    }

    if (type === "artist") {
        return ( 
            <>   
                <h1 className="title-headers">{data.name.substring(0,40)} </h1>
            </>
        );
    }


}
export default Title;
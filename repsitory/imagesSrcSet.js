import { useEffect, useState } from 'react';
const iamgesSrcSet = (data) => {

    /*     console.log("entra la data: ", data); */
    const { type } = data;
    const [imagesResolutions, setImagesResolutions] = useState({})

    const addImagesSizes = (pathInToUrl) => {
        return {
            cover_small: pathInToUrl.cover_small,
            cover_medium: pathInToUrl.cover_medium,
            cover_big: pathInToUrl.cover_big,
            cover_xl: pathInToUrl.cover_xl,
        }
    }

/*  * Fui a dormir y quite el useEffect, antes lo puse porque sin el se generaba un */
        
    useEffect(() => {
        if (data) {
            if (type === "track") {
                const imgsResolutions = addImagesSizes(data.album)
                setImagesResolutions(imgsResolutions)
            }
        }
        
        return () => {
            
        }
    }, [data])



/*     if (type === "album") {

    }
    if (type === "artists") {

    }
    if (type === "playlist") {

    } */

    return imagesResolutions;
}
export default iamgesSrcSet;
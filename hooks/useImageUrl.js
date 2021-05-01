import { useEffect, useState } from 'react'

function useImageUrl(type="",images) {

    
    /* console.log(type); */
    const [imgUrl, setImgUrl] = useState(`https://cdns-images.dzcdn.net/images/cover/${images}/500x500-000000-80-0-0.jpg`)

    useEffect(() => {
        if (type==="playlist") {
        setImgUrl(`https://cdns-images.dzcdn.net/images/playlist/${images}/500x500-000000-80-0-0.jpg`);
        } 
        return () => {
            
        }
    }, [])

    return imgUrl;
}

export default useImageUrl

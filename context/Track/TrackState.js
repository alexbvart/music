import React, {useState} from 'react';
import TrackContext from './TrackContext';

const TrackState = ({children}) => {

    const [expand, setExpand] = useState(false)

    const [images, setImages] = useState("https://cdns-images.dzcdn.net/images/cover/8e75f7f8b923eb433153a26a02071dba/500x500-000000-80-0-0.jpg")
    
    const artistinit = [{
        "id": 169361,
        "name": "Afrojack",
        "link": "https://www.deezer.com/artist/169361",
        "tracklist": "https://api.deezer.com/artist/169361/top?limit=50",
        "type": "artist"
    }]
    const [artist, setArtist] = useState(artistinit)
    const [name, setName] = useState("")
    const [duration, setDuration] = useState(null)
    const [id, setId] = useState("")

    const [darkMuted , setDarkMuted ] = useState("#2b343e")
    const [lightVibrant, setLightVibrant] = useState("#f0e478")


            /* console.log(id,name,duration,artist,images); */
    return ( 
        <TrackContext.Provider
            value={{
                expand, setExpand,
                images, setImages,
                artist, setArtist,
                name, setName,
                duration, setDuration,
                id, setId,

                darkMuted , setDarkMuted,
                lightVibrant, setLightVibrant,
            }}
        >
            {children}
        </TrackContext.Provider>
    );
}
export default TrackState;
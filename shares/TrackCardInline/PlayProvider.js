import React, {useContext} from 'react';
import TrackContext from '../../context/Track/TrackContext';
import PlayOnly from '../icon/PlayOnly';
const PlayProvider = ({id,name,duration,artist,images}) => {
    

    const {setImages,setArtist,setName,setDuration,setId} = useContext(TrackContext)
    const sendDataToContext = () => {
        setImages(images)
        setArtist(artist)
        setName(name)
        setDuration(duration)
        setId(id)
    }
    return ( 
        <>
            <div onClick={()=>{sendDataToContext()}}>
                <PlayOnly />
            </div>
            
        </>
    );
}
export default PlayProvider;
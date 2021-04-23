import {useContext, useEffect} from 'react';
import { usePalette } from 'react-palette'


import ColorContext from '../context/Color/colorContext';

const useColorBase = (datalist) => {

    /* console.log("entradata ", datalist) */;
    const { data, loading, error } = usePalette(datalist.picture_medium||datalist.cover_medium)
    
    const { baseGradient, setBaseGradient, colorBase, setColorBase} = useContext(ColorContext)

    useEffect(() => {
        if (!loading && error === undefined) {;
            setBaseGradient(`linear-gradient(341.09deg, #131213 50%, ${data.darkVibrant}  100%)`)
            setColorBase(data.darkVibrant)

            console.log("color d: ", data);
            console.log("color l: ", loading)
            console.log("color e: ", error);
        }
        return () => {

        }
    }, [loading])



    return [colorBase, baseGradient];
}
export default useColorBase;
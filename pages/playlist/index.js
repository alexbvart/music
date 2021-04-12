import React, {useState} from 'react';
import HeroAllPages from '../../components/HeroAllPages';
import Section from '../../components/Section'
const Playlist = () => {


    const datapage = {
        type: "Album",
        title: "OASIS",
        description:"Jbalbin",
        img:"https://e-cdns-images.dzcdn.net/images/cover/83ccb7389fc36648b70c6d7865fcdf25/380x380-000000-80-0-0.jpg",
        list: []
    }



    return ( 
        <>
            <HeroAllPages data={datapage}></HeroAllPages>
            <Section />
            <style global jsx>{`
                :root{
                    --base-home-gradient: 
                    
                    linear-gradient(341.09deg, #131213 47.45%, #f09EFD 98.64%);

                }
            `}</style>
        </>
    );
}
export default Playlist;
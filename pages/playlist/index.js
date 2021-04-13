import React, {useState} from 'react';
import HeroAllPages from '../../components/HeroAllPages';
import CarrouselVertical from '../../components/CarrouselVertical'
import axios from 'axios'
import { usePalette } from 'react-palette'

const Playlist = ({datalist}) => {

    console.log(datalist);

    const { data, loading, error } = usePalette(datalist.picture_medium)

    console.log("color: ", data, error);
    const color = data.lightVibrant;

    return ( 
        <>
            <main>
                <HeroAllPages data={datalist}></HeroAllPages>
                <CarrouselVertical list={datalist.tracks.data} />
            </main>
        
            <style global jsx>{`
                :root{
                    --base-home-gradient: 
                    linear-gradient(341.09deg, #131213 50%, ${color}  100%);
                }
                @media screen and (max-width: 560px) {
                    main{
                        z-index:99999;
                    }
                }

                
            `}</style>
        </>
    );
}
export default Playlist;

Playlist.getInitialProps = async ()=>{
    const type= "playlist"
    const idlist = "6135616484"
    return fetch(`https://api.deezer.com/${type}/${idlist}`)
        .then(res=>res.json())
        .then(response=>{
            const datalist=response;
            return {datalist}
        })
}
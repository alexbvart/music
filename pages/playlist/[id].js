import React, { useEffect, useState } from 'react';
import HeroAllPages from '../../components/HeroAllPages';
import CarrouselVertical from '../../components/CarrouselVertical'
import Head from 'next/head'


import { usePalette } from 'react-palette'

const Playlist = ({ datalist }) => {

    

    console.log(datalist);
    const { data, loading, error } = usePalette(datalist.picture_medium)
    
    const baseGradientInitial = `linear-gradient(341.09deg, #131213 50%, #15386C  100%)`
    const [baseGradient, setBaseGradient] = useState(baseGradientInitial)
    const [colorBase, setColorBase] = useState("#15386C")

    useEffect(() => {
        if (!loading) {
            console.log("colorlisto",data);
            setBaseGradient(`linear-gradient(341.09deg, #131213 50%, ${data.darkVibrant}  100%)`)
            setColorBase(data.darkVibrant)
        }
        return () => {
            console.log("desmontar");
        }
    }, [loading])

    console.log("color d: ", data);
    console.log("color e: ", error);
    console.log("color l: ", loading);


    return (
        <>
            <Head>
                <title>{datalist.title} </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content={colorBase} />
            </Head>
            
            <main>
                <HeroAllPages data={datalist}></HeroAllPages>
                <CarrouselVertical list={datalist.tracks.data} />
            </main>

                <style global jsx>{`
                :root{
                    --base-home-gradient: ${baseGradient}
                    ;
                }
            `}</style>
            

            <style global jsx>{`
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

Playlist.getInitialProps = async (context) => {

    const { query } = context;
    const { id } = query;
    const type = "playlist"

    return fetch(`https://api.deezer.com/${type}/${id}`)
        .then(res => res.json())
        .then(response => {
            const datalist = response;
            return { datalist }
        })
}
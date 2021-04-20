import React from 'react';
import HeroAllPages from '../../components/HeroAllPages';
import CarrouselVertical from '../../components/CarrouselVertical'
import Head from 'next/head'


import useColorBase from '../../hooks/useColorBase'

const Artist = ({  artist, listTrack}) => {

    console.log(artist);
    console.log(listTrack);

    const [colorBase,baseGradient] = useColorBase(artist) 
console.log(baseGradient
    );
    return (
        <>
            <Head>
                <title> {artist.name}  </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content={colorBase} /> 
            </Head>

            <main>
                <HeroAllPages data={artist} />
                <CarrouselVertical list={listTrack} /> 
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
export default Artist;

Artist.getInitialProps = async (context) => {

    const { query } = context;
    const { id } = query;
    const type = "artist"
    const limit = 11;

    const artist = await fetch(`https://api.deezer.com/${type}/${id}`)
        .then(res => res.json())

    const listTrack = await fetch(`https://api.deezer.com/${type}/${id}/top?limit=${limit}`)
        .then(res => res.json())


    return {
        artist: artist,
        listTrack: listTrack.data
    };

}